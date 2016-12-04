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
from hashlib import sha256
import time
import requests
from PIL import Image
from io import StringIO,BytesIO

# Move into dedicated constants.py file
CAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
CAPTCHA_SECRET_KEY = '6Ldh_QsUAAAAANZkysKJNJHjj_KfKRgJwpnaXAJf'
VIDEO_BUCKET = 'ocv160'
IMAGE_BUCKET = 'frames160'
#ALLOWED_EXTENSIONS = set(['avi', 'flv', 'wmv', 'mov', 'mp4'])
ALLOWED_EXTENSIONS = set(['mp4'])
WORKHORSE_URL = 'http://159.203.238.253:7331'

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

@app.route('/', methods=['GET', 'POST'])
@login_required
def index():
    '''
    The primary user interface for carrying out
    activities once they have been logged in to 
    their account.
    '''
    if request.method == 'GET':
        videos = list()
        for video in Video.query.all():
            videos.append({
                "vid": video.vid,
                "uid": video.uid,
                "filename": video.filename,
                "filehash": video.filehash,
                "description": video.description,
                "created": str(video.created)})

        return render_template('index.jinja2', videos=json.dumps(videos))

    if request.method == 'POST':
        new_videos = request.form['success']
        if new_videos == "True":
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

@app.route("/admin")
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
            "uid": user.uid,
            "username": user.username,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "created": str(user.created),
            "ip": user.ip})

    videos = list()
    for video in Video.query.all():
        videos.append({
            "vid": video.vid,
            "uid": video.uid,
            "filename": video.filename,
            "filehash": video.filehash,
            "description": video.description,
            "created": str(video.created)})

    return render_template(
        "admin.jinja2", 
        users=json.dumps(users),
        videos=json.dumps(videos))

@app.route('/log_out')
@login_required
def log_out():
    """
    Allows user to explicitly log out of a session.
    """
    session['logged_in'] = False
    session['uid'] = None
    session['username'] = None
    return redirect(url_for('login'))

@app.route("/authenticate", methods=['POST'])
def authenticate():
    """
    Authentication for user login attempts.
    """
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
    File validation. Helper function for upload().
    '''
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
@login_required
def upload():
    '''
    Handles video uploading
    '''
    video = request.files['video'] 
    if allowed_file(video.filename):
        filehash = sha256("".join([video.filename, 
            str(int(time.time()))]).encode("utf-8")).hexdigest()

        # Sending video file to workhorse
        data = {'request': "add_video_file_to_queue", 'video_file_name': filehash}
        files = {'video_file': (video)}
        r = requests.post(WORKHORSE_URL, data=data, files=files)

        # Packaging thumbnail
        thumbnail = StringIO(r.text)
        thumbnail = Image.open(BytesIO(r.content))
        image_out = BytesIO()
        thumbnail.save(image_out, "JPEG")
      
        # Store the metadata in the DB
        #new_video = Video(
        #    session['uid'],
        #    video.filename,
        #    filehash,
        #    request.form['description'],
        #    datetime.utcnow())
        #db.session.add(new_video)
        #db.session.commit()

        # Upload the file to S3
        s3 = boto3.resource('s3')
        video_bucket = s3.Bucket(VIDEO_BUCKET)
        image_bucket = s3.Bucket(IMAGE_BUCKET)
        #video_bucket.put_object(Key=filehash, Body=video)
        image_bucket.put_object(Key="testimage", Body=image_out.getvalue())
    return redirect(url_for('index')) 
