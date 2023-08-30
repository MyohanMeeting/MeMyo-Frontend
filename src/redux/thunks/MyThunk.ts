import { basicApi } from '@redux/api/axiosConfig';
import { getMyNotice, getUserInfo } from '@redux/slice/mypageSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkzMzU5OTc2fQ.iF6__svFPpMALQvGQmPGKbJ-da2LAqOqY51J1ZyjEhzIOWgbitdkqt_Xbt0lRrZ6lq0qWvstSv4xOoZKUi--iA';

export const getUserInfoThunk = createAsyncThunk('mypage/getUserInfo', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/member',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result.data) {
        const { data } = result.data;
        if (data) {
          thunkApi.dispatch(getUserInfo(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export const getMyNoticeThunk = createAsyncThunk('mypage/getMyNotice', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/adoption/notices/my',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result.data) {
        const data = result.data.data;
        if (data) {
          thunkApi.dispatch(getMyNotice(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});
