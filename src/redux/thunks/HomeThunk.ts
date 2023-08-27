import { basicApi } from '@redux/api/axiosConfig';
import { getRecentPost } from '@redux/slice/recentPostSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRecentPostThunk = createAsyncThunk(
  'recentPost/getRecentPost',
  async (facet: any, thunkApi) => {
    try {
      await basicApi({
        method: 'get',
        url: '/v1/adoption/notices',
        headers: {
          withCredentials: false,
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
