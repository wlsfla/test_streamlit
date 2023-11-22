from datetime import datetime
import requests as re
import json

_AUTH = {
    "identity":"test_user",
    "password":"test_user"
    }

def getLoginToken() -> str:
    json_headers = {'Content-Type': 'application/json; charset=utf-8'}
    resp = re.post(url='http://127.0.0.1:8090/api/collections/users/auth-with-password', headers=json_headers, json=_AUTH)
    token = resp.json()['token']
    
    return token

def post(url, payload) -> int:
    resp = re.post(url, headers={'Authorization':getLoginToken()}, json=payload)
    
    return resp.status_code

def getCurrDate():
    return f'Updated At {datetime.today().strftime("%Y-%m-%d %H:%M:%S")}'
