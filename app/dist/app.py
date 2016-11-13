from flask import Flask, render_template, request
from models import db, User
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:mysecretpassword@172.17.0.2/opencv'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def index():
    return render_template('index.jinja2')

@app.route('/login')
def login():
    return render_template('login.jinja2')

@app.route('/register')
def register():
    return render_template('register.jinja2')

@app.route('/confirmation', methods=['POST'])
def confirmation():

    new_user = User(
        request.form['username'],
        request.form['first-name'],
        request.form['last-name'],
        request.form['password'],
        datetime.time(datetime.now()),
        request.environ['REMOTE_ADDR']
    )
    db.session.add(new_user)
    db.session.commit()
    return render_template('confirmation.jinja2')



################################################################################
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
