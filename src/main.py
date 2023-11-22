import streamlit as st
import pandas as pd
import numpy as np


st.set_page_config(
    page_title="Hello",
    page_icon="👋",
    layout="wide",
)


st.info(st.__version__)


# df = pd.DataFrame(
#     [
#        {"command": "st.selectbox", "rating": 4, "is_widget": True},
#        {"command": "st.balloons", "rating": 5, "is_widget": False},
#        {"command": "st.time_input", "rating": 3, "is_widget": True},
#    ]
# )
# edited_df = st.data_editor(df, key="demo_df", num_rows="dynamic", hide_index=False)

# st.subheader("Edited df")
# st.write(edited_df)

# st.subheader("Edited rows")
# edited_rows = st.session_state["demo_df"].get("edited_rows")
# st.write(edited_rows)

# random_value = np.random.randn()

# st.session_state
# if "df_result" not in st.session_state:
#     st.session_state['df_result'] = pd.DataFrame(columns=['h1','h2'])

# def onAddRow():
#     data = {
#             'h1':"something",
#             'h2':"something",
#         }
#     st.session_state['df_result'] = st.session_state['df_result'].append(data, ignore_index=True)

# st.button("Add row", on_click = onAddRow)

st.header('User List')
user_list_df = st.data_editor(pd.DataFrame(columns=
                                        ['phone_num', 'name', 'classes', 'gruop_lv1', 'gruop_lv2', 'gruop_lv3', 'tmp1', 'tmp2']), # 8 columns
                                        num_rows="dynamic", key='user_df')

st.header('Asset List')
hw_list_df = st.data_editor(pd.DataFrame(columns=
                                        ['manage_code', 'ip_addr', 'hw_category', 'vendor_name', 'build_year', 'build_mon', 'model_code', 'serial_code']), # 8 columns
                                        num_rows="dynamic", key='hw_df')


def SendData():
    
    pass

st.button('Send', on_click=SendData)


# if st.button('Save As'):
#      # edited_df.to_csv('./data/annotated_modi.csv')
#      st.write('Save Success.')
