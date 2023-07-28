from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(120), unique=True, nullable=False)
    Room_pin = db.Column(db.String(80), unique=False, nullable=True)
    Host=db.Column(db.String(120), db.ForeignKey("Host.Name"), nullable=False)


    def __repr__(self):
        return f'<Room {self.Name}>'

    def serialize(self):
        return {
            "id": self.id,
            "Name": self.Name,
            "Room_pin": self.Room_pin,
            "Host":self.Host
        }

class Host(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(120), unique=True, nullable=False)
    Host_rooms = db.Relationship("Room",backref="Host",lazy=True)


    def __repr__(self):
        return f'<Room {self.Name}>'

    def serialize(self):
        return {
            "id": self.id,
            "Name": self.Name,
            "Host_rooms": self.Host.rooms,

            # do not serialize the password, its a security breach
        }