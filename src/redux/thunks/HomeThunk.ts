import { basicApi } from '@redux/api/axiosConfig';
import { getRecentPost } from '@redux/slice/recentPostSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkyNTg1OTk4fQ.6Y1L_XaKvQrqwn9bM4h7oySeOXT-w5rhoM5gGgm5THxB9eF7TpijB4fxZKCoveo0a1ljoMCljwrualDKc7T4Hw';

export const getRecentPostThunk = createAsyncThunk(
  'recentPost/getRecentPost',
  async (facet: any, thunkApi) => {
    try {
      await basicApi({
        method: 'get',
        url: '/v1/adoption/notices',
        headers: {
          withCredentials: true,
        },
        params: { ...facet },
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
