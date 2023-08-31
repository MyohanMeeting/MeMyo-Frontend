import { basicApi } from '@redux/api/axiosConfig';
import { getMyAdoption, getMyNotice, getUserInfo } from '@redux/slice/mypageSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkzMzc1NjE2fQ.RZluEktaDlvSJv6bamo_rjaSahoK95OR_JeJv48hCYJjV0yEfP2zE7ZJVkETQMi0MU464UticvYHMszg1zCDHg';

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

export const getMyAdoptionThunk = createAsyncThunk('mypage/getMyAdoption', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/adoption/applications/my',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result) {
        const data = result.data.data;
        if (data) {
          thunkApi.dispatch(getMyAdoption(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});
