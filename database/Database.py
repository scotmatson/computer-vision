import psycopg2

class Database:

    def __init__(self, name, host, port, user, password):
        self.name = name
        self.host = host
        self.port = port
        self.user = user
        self.password = password

    def add_user(self, username, f_name, l_name, password, last_login, ip):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, firstName, lastName, \
        password, lastLogin, ip) VALUES ('{}', '{}', '{}', '{}', '{}', '{}')"
            .format(username, f_name, l_name, password, last_login, ip))
        conn.commit()
        conn.close

    def valid_credentials(self, username, password):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE username='{}'"
            .format(username))
        conn.commit
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
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT username FROM users WHERE username='{}'"
            .format(username))
        conn.commit
        result = cursor.fetchone()
        conn.commit()
        conn.close()
        return result is not None

    def add_video_metadata(self, name, user_id, width, height, fps):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO videos (name, userId, width, height, fps)\
         VALUES ('{}', '{}', '{}', '{}', '{}')"
            .format(name, user_id, width, height, fps))
        conn.commit()
        conn.close

    def add_skull_data(self, frame_number, yaw, pitch, roll):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO skull (frameId, yaw, pitch, roll) VALUES \
        ('{}',  '{}', '{}', '{}')".format(frame_number, yaw, pitch, roll))
        conn.commit()
        conn.close

    def add_pupil_data(self, frame_number, location):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO pupil (frameId, location) VALUES ('{}', \
        '{}')".format(frame_number, location))
        conn.commit()
        conn.close

    def add_openface_data(self, frame_number, location, index):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO openFace (frameId, location, index) \
        VALUES ('{}', '{}', '{}')".format(frame_number, location, index))
        conn.commit()
        conn.close

    def get_connection(self):
        return psycopg2.connect("dbname='{}' host='{}' port='{}' user='{}' \
        password='{}'"
            .format(self.name, self.host, self.port, self.user, self.password))
