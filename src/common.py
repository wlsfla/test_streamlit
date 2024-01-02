from datetime import datetime
import requests as re
import json

_USER_COL = ['phone_num', 'name', 'classes', 'gruop_lv1', 'gruop_lv2', 'gruop_lv3', 'tmp1', 'tmp2']
_ASSET_COL = ['manage_code', 'ip_addr', 'hw_category', 'vendor_name', 'build_year', 'build_mon', 'model_code', 'serial_code']
_VENDOR_COL = ['device_category', 'vendor_name', 'year', 'month', 'model_name', 'model_code', 'etc']

class Session:
    _AUTH = {
        "identity":"test_user",
        "password":"test_user"
        }
    _TOKEN = ''

    @staticmethod
    def getLoginToken() -> str:
        json_headers = {'Content-Type': 'application/json; charset=utf-8'}
        resp = re.post(url='http://127.0.0.1:8090/api/collections/users/auth-with-password', headers=json_headers, json=Session._AUTH)
        token = resp.json()['token']
        
        return token
    
    def __new__(cls) -> Self:
        pass


class Common:
    def post(self, url, payload) -> re.Response:
        return re.post(url, headers={'Authorization': self._TOKEN}, json=payload)

    @staticmethod
    def getCurrDate():
        return f'Updated At {datetime.today().strftime("%Y-%m-%d %H:%M:%S")}'

    def get(self, url) -> re.Response:
        return re.get(url=url, headers={'Authorization': self._TOKEN})

    def __init__(self) -> None:
        self._TOKEN = self.getLoginToken()