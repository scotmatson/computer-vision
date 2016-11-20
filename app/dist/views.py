from dist import app
from flask import render_template, request, redirect, url_for, session
from functools import wraps
from dist.models import db, User
from datetime import datetime
from urllib.parse import urlencode
from urllib.request import urlopen
import json

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
        request.environ['REMOTE_ADDR']
    )
    db.session.add(new_user)
    db.session.commit()
    return render_template('confirmation.jinja2')

@app.route('/admin')
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
            "lastlogin": str(user.lastlogin),
            "ip": user.ip})
    return render_template('admin.jinja2', users=json.dumps(users))

@app.route('/log_out')
def log_out():
    '''
    Allows user to explicitly log out of a session.
    '''
    session['logged_in'] = False
    return redirect(url_for('login'))

@app.route('/authenticate', methods=['POST'])
def authenticate():
    '''
    Authentication for user login attempts.
    '''
    google_url = 'https://www.google.com/recaptcha/api/siteverify'
    recaptcha = {
        'secret'  : '6Ldh_QsUAAAAANZkysKJNJHjj_KfKRgJwpnaXAJf',
        'response': request.form['g-recaptcha-response'],
        'remoteip': request.environ['REMOTE_ADDR']
    }

    if request.form['g-recaptcha-response']:
        req = urlopen(google_url, urlencode(recaptcha).encode())
        res = json.loads(req.read().decode())

    if res['success']:
        for record in [User.query.filter_by(username=request.form['username']).first()]:
            if record:
                if record.check_password(request.form['password']):
                    session['username'] = record.username
                    session['logged_in'] = True
                    return redirect(url_for('index'))
    return redirect(url_for('login'), code=307)
