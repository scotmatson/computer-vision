from flask import Flask, render_template
from models import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/opencv'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def index():
    return render_template('index.jinja2')

@app.route('/login')
def login():
    return render_template('login.jinja2')

@app.route('/registration')
def register():
    return render_template('register.jinja2')

################################################################################
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
