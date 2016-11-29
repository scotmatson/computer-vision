from dist import app
from flask import render_template, request, redirect, url_for, session
from functools import wraps
from dist.models import db, User, Video
from datetime import datetime
from urllib.parse import urlencode
from urllib.request import urlopen
import json
import sys
import boto3

# Move into dedicated constants.py file
CAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
CAPTCHA_SECRET_KEY = '6Ldh_QsUAAAAANZkysKJNJHjj_KfKRgJwpnaXAJf'
UPLOAD_BUCKET = 'ocv160'
ALLOWED_EXTENSIONS = set(['avi', 'flv', 'wmv', 'mov', 'mp4'])

def login_required(f):
    '''
    A decorator function that restricts site access
    to unauthorized parties.
    '''
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session or session['logged_in'] is False:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/', methods=['GET'])
@login_required
def index():
    '''
    The primary user interface for carrying out
    activities once they have been logged in to 
    their account.
    '''
    if request.method == 'GET':
        return render_template('index.jinja2')

@app.route('/login', methods=['GET', 'POST'])
def login():
    '''
    A view for entering authorization credentials to access
    a user account. New users will have the option to
    create a new account.
    '''
    if request.method == 'GET':
        return render_template('login.jinja2', authenticated=0)
    elif request.method == 'POST':
        return render_template('login.jinja2', authenticated=-1)

@app.route('/register')
def register():
    '''
    A standard account registration view.
    '''
    return render_template('register.jinja2')

@app.route('/confirmation', methods=['POST'])
def confirmation():
    '''
    A confirmation view to notify a newly registered user the
    outcome of their new account registration. 
    '''
    new_user = User(
        request.form['username'],
        request.form['first-name'],
        request.form['last-name'],
        request.form['password'],
        datetime.utcnow(),
        request.environ['REMOTE_ADDR'])

    db.session.add(new_user)
    db.session.commit()
    return render_template('confirmation.jinja2')

@app.route('/admin')
@login_required
def admin():
    '''
    An administrative view reserved for authorized users.
    Provides heightened level of access for viewing
    and interacting with the postgresql database.
    '''
    users = list()
    for user in User.query.all():
        users.append({
            'uid': user.uid,
            'username': user.username,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'created': str(user.created),
            'ip': user.ip})

    videos = list()
    for video in Video.query.all():
        videos.append({
            'vid': video.vid,
            'uid': video.uid,
            'filename': video.filename,
            'created': str(video.created)})

    return render_template(
        'admin.jinja2', 
        users=json.dumps(users),
        videos=json.dumps(videos))

@app.route('/log_out')
@login_required
def log_out():
    '''
    Allows user to explicitly log out of a session.
    '''
    session['logged_in'] = False
    session['uid'] = None
    session['username'] = None
    return redirect(url_for('login'))

@app.route('/authenticate', methods=['POST'])
def authenticate():
    '''
    Authentication for user login attempts.
    '''
    recaptcha = {
        'secret'  : CAPTCHA_SECRET_KEY,
        'response': request.form['g-recaptcha-response'],
        'remoteip': request.environ['REMOTE_ADDR']
    }

    if request.form['g-recaptcha-response']:
        req = urlopen(CAPTCHA_URL, urlencode(recaptcha).encode())
        res = json.loads(req.read().decode())

    # If captcha is successful ...
    if res['success']:
        for record in [User.query.filter_by(username=request.form['username']).first()]:
            # ... if user exists ...
            if record:
                #  ... confirm password challenge.
                if record.check_password(request.form['password']):
                    session['uid'] = record.uid
                    session['username'] = record.username
                    session['logged_in'] = True
                    return redirect(url_for('index'))
    return redirect(url_for('login'), code=307)

def allowed_file(filename):
    '''
    File validation
    '''
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
@login_required
def upload():
    '''
    Handles video uploading
    '''
    if 'video' not in request.files:
        print("Not a file.... dangit. This should be a file.")
    else:
        video = request.files['video'] 
        if allowed_file(video.filename):
            # Store the metadata in the DB
            new_video = Video(
                session['uid'],
                video.filename,
                datetime.utcnow())
            db.session.add(new_video)
            db.session.commit()

            # Upload the file to S3
            s3 = boto3.resource('s3')
            bucket = s3.Bucket(UPLOAD_BUCKET)
            bucket.put_object(Key=video.filename, Body=video)
    return redirect(url_for('index')) 

# This will print all of the objects in a bucket.
# Probably will be useful for checking what we've downloaded
# So we can get new videos.
#
# bucket = s3.Bucket('ocv160')
# for obj in bucket.objects.all():
#     print(obj.key)

# For downloading files
# s3 = boto3.resource('s3')
# s3.meta.client.download_file('bucketname', 'DL Source File', 'DL Dest Path/File')
#
# Need to research if we can access files and display them without downloading
# them. That would be convenient.

