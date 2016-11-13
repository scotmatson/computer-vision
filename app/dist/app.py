from flask import Flask, render_template, request
from models import db, User
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:mysecretpassword@172.17.0.2/opencv'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def index():
    '''
    The primary user interface for carrying out
    activities once they have been logged in to 
    their account.
    '''
    return render_template('index.jinja2')

@app.route('/login')
def login():
    '''
    A view for entering authorization credentials to access
    a user account. New users will have the option to
    create a new account.
    '''
    return render_template('login.jinja2')

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
    return render_template('admin.jinja2')



################################################################################
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
