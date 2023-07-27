"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, room
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
    room=room(Name=body['Name'], Room_pin=body['Room_pin'])
    db.session.add(room)
    db.session.commit()
    query_room=room.query.all()
    all_rooms = list(map(lambda x: x.serialize(), query_room))

    return jsonify(all_rooms), 200

@api.route('/host', methods=['POST'])
def handle_host():
    body=request.get_json()
    host=room(Name=body['Name'], Room_pin=body['Room_pin'])
    db.session.add(host)
    db.session.commit()
    query_host=room.query.all()
    all_hosts = list(map(lambda x: x.serialize(), query_host))

    return jsonify(all_hosts), 200

