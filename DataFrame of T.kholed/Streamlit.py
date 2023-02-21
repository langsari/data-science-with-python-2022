import streamlit as st
import pandas as pd
import plotly.express as px
import seaborn as sns

df=pd.read_excel('C:/Users/TUF GAMING/Documents/GitHub/data-science-with-python-2022/DataFrame of T.kholed/newdata.xlsx')

df = sns.load_dataset('titanic')
st.title('Titanic Dashboard')
st.subheader('Dataset')
st.dataframe(df)
st.subheader('Data Numerical Statistic')
st.dataframe(df.describe())