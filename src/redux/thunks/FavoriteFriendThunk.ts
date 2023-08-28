import { basicApi } from '@redux/api/axiosConfig';
import { getFavoriteFriends, getFavoriteFriendsId } from '@redux/slice/favoriteFriendSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2OTMwODAzODd9.yM_EzxOw7sq0TWR-rSPTVFOVUFwtgs9Sce2xOvuyarQOvJ13CSy2Bnk5zl8qoOyl3IT2VAvEI36lc5AG5nTKYg';

export const setFavoriteFriendThunk = createAsyncThunk(
  'favoriteFriend/setFavoriteFriend',
  async (noticeId: number, thunkApi) => {
    try {
      await basicApi({
        method: 'post',
        url: `/v1/favorite`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          noticeId,
        },
      }).then((result) => {
        if (result.data) {
          const { data } = result.data;
          thunkApi.dispatch(getFavoriteFriendsId(data));
        }
        console.log('result', result.statusText);
      });
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const deleteFavoriteFriendThunk = createAsyncThunk(
  'favoriteFriend/deleteFavoriteFriend',
  async (favoriteId: number) => {
    try {
      await basicApi({
        method: 'delete',
        url: `/v1/favorite/${favoriteId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: { favoriteId },
      }).then((result) => {
        console.log('result', result);
      });
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const getFavoriteFriendThunk = createAsyncThunk(
  'favoriteFriend/getFavoriteFriend',
  async (favoriteFriends: any, thunkApi) => {
    try {
      await basicApi({
        method: 'get',
        url: '/v1/favorite',
        headers: {
          withCredentials: true,
        },
        params: { ...favoriteFriends },
      }).then((result) => {
        if (result.data) {
          const { data } = result.data;
          if (data) {
            thunkApi.dispatch(getFavoriteFriends(data));
          }
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  }
);
