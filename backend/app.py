from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/members', methods=['GET'])
def get_members():
    members = [
        {"id": 1, "name": "John Doe", "college": "Engineering College A"},
        {"id": 2, "name": "Jane Smith", "college": "Tech University B"}
    ]
    return jsonify(members)

if __name__ == '__main__':
    app.run(port=5000)