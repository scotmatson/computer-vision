from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import INET, TIMESTAMP
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    uid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True)
    firstname = db.Column(db.String(20))
    lastname = db.Column(db.String(20))
    password = db.Column(db.String(116))
    created = db.Column(TIMESTAMP)
    ip = db.Column(INET)

    def __init__(self, username, first_name, last_name, password, created, ip):
        self.username = username
        self.firstname = first_name.title()
        self.lastname = last_name.title()
        self.set_password(password) 
        self.created = created
        self.ip = ip

    def set_password(self, password):
        self.password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=32)

    def check_password(self, password):
        return check_password_hash(self.password, password)
