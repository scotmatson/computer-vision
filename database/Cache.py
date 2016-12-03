import redis

class Cache:

    def __init__(self, host, port):
        self.client = redis.StrictRedis(host=host, port=port)

    def add_user(self, uid, username, fname, lname, password, created, ip):
        self.client.set(username, uid)
        self.client.hmset(uid, {"username":username, "fname":fname, "lname":lname,
        "password":password, "created":created, "ip":ip})

    def retrieve_pass_from_username(self, username, password):
        self.client.hmget(self.client.get(username), "password")

    def user_exists(self, username):
        return self.client.get(username) is not None

    def add_video(self, vid, uid, filename, filehash, description, created):
        self.client.hmset(vid, {"uid":uid, "filename":filename, "filehash":filehash,
        "description":description, "created":created})

    def ping(self):
        return self.client.ping()
