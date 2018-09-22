import os
from bottle import request, route, run

@route('/api')
def hello():
    text = request.query.text
    return text

run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))