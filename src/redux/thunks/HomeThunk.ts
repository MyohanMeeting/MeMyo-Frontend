import { basicApi } from '@redux/api/axiosConfig';
import { getRecentPost } from '@redux/slice/recentPostSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2OTMwODAzODd9.yM_EzxOw7sq0TWR-rSPTVFOVUFwtgs9Sce2xOvuyarQOvJ13CSy2Bnk5zl8qoOyl3IT2VAvEI36lc5AG5nTKYg';

export const getRecentPostThunk = createAsyncThunk(
  'recentPost/getRecentPost',
  async (recentPost: any, thunkApi) => {
    try {
      await basicApi({
        method: 'get',
        url: '/v1/adoption/notices',
        headers: {
          withCredentials: true,
        },
      }).then((result) => {
        if (result.data) {
          const { data } = result.data;
          if (data) {
            thunkApi.dispatch(getRecentPost(data));
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
);
