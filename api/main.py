import os
import json
from bottle import request, route, run

@route('/api', method='POST')
def main():
    # 本文
    text = request.params.text;

    if text: # テキストが存在する場合
        result = {
            "status": "OK",
            "res": text,
        }
    else: # テキストが存在しない場合(エラー)
        result = {
            "status": "ERROR",
            "error": {
                "message": "no text inputted"
            }
        }
    return result

run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))