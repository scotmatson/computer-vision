from flask import Flask, render_template, request, redirect, url_for, session
from functools import wraps
from dist.models import db
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:mysecretpassword@172.17.0.2/opencv'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

import dist.views
