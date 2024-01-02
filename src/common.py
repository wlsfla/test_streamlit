from datetime import datetime
import requests as re
import json



class Session:
    _AUTH = {
        "identity":"test_user",
        "password":"test_user"
        }
    _TOKEN = ''

    @staticmethod
    def __getLoginToken() -> str:
        json_headers = {'Content-Type': 'application/json; charset=utf-8'}
        resp = re.post(url='http://127.0.0.1:8090/api/collections/users/auth-with-password', headers=json_headers, json=Session._AUTH)
        token = resp.json()['token']
        print(f'Authorized DataBase Access Token!! by {Common.getCurrDate()}')

        return token
    
    @staticmethod
    def setLoginToken() -> None:
        Session._TOKEN = Session.__getLoginToken()
        

class Common:
    _USER_COL = ['phone_num', 'name', 'classes', 'gruop_lv1', 'gruop_lv2', 'gruop_lv3', 'tmp1', 'tmp2']
    _ASSET_COL = ['manage_code', 'ip_addr', 'hw_category', 'vendor_name', 'build_year', 'build_mon', 'model_code', 'serial_code']
    _VENDOR_COL = ['device_category', 'vendor_name', 'year', 'month', 'model_name', 'model_code', 'etc']

    @staticmethod
    def getCurrDate():
        return f'Updated At {datetime.today().strftime("%Y-%m-%d %H:%M:%S")}'

    @staticmethod    
    def post(url, payload) -> re.Response:
        return re.post(url, headers={'Authorization': Session._TOKEN}, json=payload)

    @staticmethod
    def get(url) -> re.Response:
        return re.get(url=url, headers={'Authorization': Session._TOKEN})
