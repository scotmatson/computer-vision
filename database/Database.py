import psycopg2
import socket
from datetime import datetime
from Cache import Cache

class Database:

    def __init__(self, name, host, port, user, password, cache = None):
        self.name = name
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.cache = cache

    def add_user(self, username, fname, lname, password, created, ip):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, firstname, lastname, \
        password, created, ip) VALUES ('{}', '{}', '{}', '{}', '{}', '{}')"
            .format(username, fname, lname, password, created, ip))
        conn.commit()

        if self.cache_up():
            cursor.execute("SELECT uid FROM users WHERE username='{}'"
                .format(username))
            uid = cursor.fetchone()
            conn.commit()
            self.cache.add_user(uid, username, fname, lname, password, created, ip)
        conn.close

    def valid_credentials(self, username, password):
        if self.cache_up():
            pw = self.cache.retrieve_pass_from_username(username, password)
            if pw is not None:
                 if pw == password:
                     return True
                 return False
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE username='{}'"
            .format(username))
        conn.commit()
        result = cursor.fetchone()
        conn.commit()
        conn.close()
        if result is None:
            return False
        elif password == result[0]:
            return True
        else:
            return False

    def user_exists(self, username):
        if(self.cache_up() and self.cache.user_exists(username)):
            return True
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT username FROM users WHERE username='{}'"
            .format(username))
        conn.commit
        result = cursor.fetchone()
        conn.commit()
        conn.close()
        return result is not None

    def add_video(self, uid, filename, filehash, description, created):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO videos (uid, filename, filehash, description, created)\
         VALUES ('{}', '{}', '{}', '{}', '{}')"
            .format(uid, filename, filehash, description, created))
        conn.commit()
        if self.cache_up():
            cursor.execute("SELECT vid FROM videos WHERE filehash='{}'"
                .format(filehash))
            vid = cursor.fetchone()
            conn.commit()
            self.cache.add_video(vid, uid, filename, filehash, description, created)
        conn.close

    def get_connection(self):
        return psycopg2.connect("dbname='{}' host='{}' port='{}' user='{}' \
        password='{}'"
            .format(self.name, self.host, self.port, self.user, self.password))

    def cache_up(self):
        return self.cache is not None and self.cache.ping()
