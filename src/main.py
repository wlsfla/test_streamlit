import streamlit as st
import pandas as pd
import numpy as np
import common

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


st.header('User List')
user_list_df = st.data_editor(pd.DataFrame(columns=
                                        ['phone_num', 'name', 'classes', 'gruop_lv1', 'gruop_lv2', 'gruop_lv3', 'tmp1', 'tmp2']), # 8 columns
                                        num_rows="dynamic", key='user_df')
st.caption(st.session_state.userlist_result_str)

st.header('Asset List')
hw_list_df = st.data_editor(pd.DataFrame(columns=
                                        ['manage_code', 'ip_addr', 'hw_category', 'vendor_name', 'build_year', 'build_mon', 'model_code', 'serial_code']), # 8 columns
                                        num_rows="dynamic", key='hw_df')
st.caption(st.session_state.assetlist_result_str)

def SendData():
    _result = 0
    _url = 'http://127.0.0.1:8090/api/collections/user_list/records'
    
    if len(user_list_df) == 0:
        st.session_state.userlist_result_str = _FAILED_CODE

    for idx in range(len(user_list_df)):
        _result = common.post(_url,
                    user_list_df.iloc[idx].to_dict()
                    )
        if _result != 200:
            break
        
    if _result == 200:
        st.session_state.userlist_result_str = _COMPLETE_CODE + ' ' + common.getCurrDate()
    else:
        st.session_state.userlist_result_str = _FAILED_CODE + ' ' + common.getCurrDate()
    


    if len(hw_list_df) == 0:
        st.session_state.assetlist_result_str = _FAILED_CODE + ' ' + common.getCurrDate()

    _url = 'http://127.0.0.1:8090/api/collections/hw_list/records'
    for idx in range(len(hw_list_df)):
        _result = common.post(_url,
                    hw_list_df.iloc[idx].to_dict()
                    )
        if _result != 200:
            break
        
    if _result == 200:
        st.session_state.assetlist_result_str = _COMPLETE_CODE + ' ' + common.getCurrDate()
    else:
        st.session_state.assetlist_result_str = _FAILED_CODE + ' ' + common.getCurrDate()


st.button('Send', on_click=SendData)

