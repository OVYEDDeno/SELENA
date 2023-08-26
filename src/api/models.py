from flask_sqlalchemy import SQLAlchemy
import uuid
db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    uuid = db.Column(db.Integer,  default=lambda: uuid.uuid4().int >> (128 - 14), unique=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    room= db.relationship('Room', backref='users')

    def __repr__(self):
        return f'<Users {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "uuid": self.uuid,
            # do not serialize the password, its a security breach
        }
class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(120), unique=True, nullable=False)
    uuid = db.Column(db.Integer,  default=lambda: uuid.uuid4().int >> (128 - 14), unique=True)


    def __repr__(self):
        return f'<Room {self.Name}>'

    def serialize(self):
        return {
            "id": self.id,
            "Name": self.Name
            }

# class Host(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     Name = db.Column(db.String(120), unique=True, nullable=False)
#     # Host_rooms = db.relationship("Room",backref="Host",lazy=True)


#     def __repr__(self):
#         return f'<Room {self.Name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "Name": self.Name

#             # do not serialize the password, its a security breach
#         }