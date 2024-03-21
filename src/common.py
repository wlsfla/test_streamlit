from datetime import datetime
import requests as re
import json

class Common:
    _AUTH = {
        "identity":"test_user",
        "password":"test_user"
        }

    _TOKEN = ''

    def getLoginToken(self) -> str:
        json_headers = {'Content-Type': 'application/json; charset=utf-8'}
        resp = re.post(url='http://127.0.0.1:8090/api/collections/users/auth-with-password', headers=json_headers, json=self._AUTH)
        token = resp.json()['token']
        
        return token

    def post(self, url, payload) -> re.Response:
        return re.post(url, headers={'Authorization': self._TOKEN}, json=payload)

    @staticmethod
    def getCurrDate():
        return f'Updated At {datetime.today().strftime("%Y-%m-%d %H:%M:%S")}'

    def __init__(self) -> None:
        self._TOKEN = self.getLoginToken()