import streamlit as st
import pandas as pd
import numpy as np
from common import Common, Session
import json

st.set_page_config(
    page_title="Hello",
    page_icon="👋",
    layout="wide",
)


_COMPLETE_CODE = '✅ Send Complete'
_FAILED_CODE = '🚫 Send Failed'
_DEFAULT_CODE = 'None'


if 'sendFlag' not in st.session_state:
    st.session_state['sendFlag'] = False

if 'userlist_result_str' not in st.session_state:
    st.session_state['userlist_result_str'] = _DEFAULT_CODE

if 'assetlist_result_str' not in st.session_state:
    st.session_state['assetlist_result_str'] = _DEFAULT_CODE

Session.setLoginToken()

st.header('User List')
user_list_df = st.data_editor(pd.DataFrame(
    columns=Common._USER_COL), # 8 columns
    num_rows="dynamic",
    key='user_df'
    )
st.caption(st.session_state.userlist_result_str)

st.header('Asset List')
hw_list_df = st.data_editor(
    pd.DataFrame(columns=Common._ASSET_COL), # 8 columns
    column_config={
        'build_year': st.column_config.NumberColumn(
            'build_year',
            help='도입연도를 입력하세요.(2000~2050)',
            min_value=2000,
            max_value=2050,
            format='%d',
        )
    },
    num_rows="dynamic",
    key='hw_df'
    )
st.caption(st.session_state.assetlist_result_str)

def SendData():
    _result = None
    _userListId = []
    _hwListId = []

    com = Common()

    if len(user_list_df) == 0:
        st.session_state.userlist_result_str = _FAILED_CODE
    else:
        _url = 'http://127.0.0.1:8090/api/collections/user_list/records'
        for idx in range(len(user_list_df)):
            _result = com.post(url=_url,
                               payload=user_list_df.iloc[idx].to_dict()
                               )

            if _result.status_code == 200:
                _userListId.append(_result.json()['id'])
            else:
                break
            
        if _result.status_code == 200:
            st.session_state.userlist_result_str = _COMPLETE_CODE + ' ' + Common.getCurrDate()
        else:
            st.session_state.userlist_result_str = _FAILED_CODE + ' ' + Common.getCurrDate()
    
    if len(hw_list_df) == 0:
        st.session_state.assetlist_result_str = _FAILED_CODE + ' ' + Common.getCurrDate()
    else:
        _url = 'http://127.0.0.1:8090/api/collections/hw_list/records'
        for idx in range(len(hw_list_df)):
            _result = com.post(url=_url,
                               payload=hw_list_df.iloc[idx].to_dict()
                               )

            if _result.status_code == 200:
                _hwListId.append(_result.json()['id'])
            else:
                break
            
        if _result.status_code == 200:
            st.session_state.assetlist_result_str = _COMPLETE_CODE + ' ' + Common.getCurrDate()
        else:
            st.session_state.assetlist_result_str = _FAILED_CODE + ' ' + Common.getCurrDate()
    
    com.post(url='http://127.0.0.1:8090/api/collections/hw_usage_status/records',
             payload={
                 'hw_id': _hwListId,
                 'user_id': _userListId
                 }
                 )

def clearList():
    pass

def tableGenerator(_tbl_name: str, _col_array: list[str]):
    return st.dataframe(pd.DataFrame(
        Common.get(url=f'http://127.0.0.1:8090/api/collections/{_tbl_name}/records').json()['items'],
        columns=_col_array))

st.button('Send', on_click=SendData)


st.divider()

st.subheader('Vendor List')
tableGenerator("vendor_list", Common._VENDOR_COL)

st.subheader('User List')
tableGenerator("user_list", Common._USER_COL)

st.subheader('Asset List')
tableGenerator('hw_list', Common._ASSET_COL)
