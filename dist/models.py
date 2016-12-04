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
        """
        Class initializer.
        """
        self.username = username
        self.firstname = first_name.title()
        self.lastname = last_name.title()
        self.set_password(password) 
        self.created = created
        self.ip = ip

    def set_password(self, password):
        """
        Hashes and salts a user's password for storage in the database.
        """
        self.password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=32)

    def check_password(self, password):
        """
        Validates a users login crednetials against the stored password.
        """
        return check_password_hash(self.password, password)

class Video(db.Model):
    __tablename__ = 'videos'
    vid = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.Integer)
    filename = db.Column(db.String(50))
    filehash = db.Column(db.String(64))
    videoname = db.Column(db.String(20))
    description = db.Column(db.String(60))
    created = db.Column(TIMESTAMP)

    def __init__(self, uid, filename, filehash, videoname, description, created):
        """
        Class initializer.
        """
        self.uid = uid
        self.filename = filename
        self.filehash = filehash
        self.videoname = videoname
        self.description = description
        self.created = created
