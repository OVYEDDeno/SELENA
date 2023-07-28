"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Room, Host
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/room', methods=['POST'])
def handle_room():
    body=request.get_json()
    room=Room(Host=body['Host'], Name=body['Name'], Room_pin=body['Room_pin'])
    db.session.add(room)
    db.session.commit()

    return jsonify(room.serialize()), 200

@api.route('/room', methods=['GET'])
def handle_room():
    query_room=Room.query.all()
    all_rooms = list(map(lambda x: x.serialize(), query_room))

    return jsonify(all_rooms), 200

@api.route('/host', methods=['POST'])
def handle_host():
    body=request.get_json()
    host=Host(Name=body['Name'], Rooms=Room.query.filter_by(host=Host).all())
    db.session.add(host)
    db.session.commit()
    
    return jsonify(host.serialize()), 200

@api.route('/host', methods=['GET'])
def handle_host():
    query_host=Room.query.all()
    all_hosts = list(map(lambda x: x.serialize(), query_host))

    return jsonify(all_hosts), 200

