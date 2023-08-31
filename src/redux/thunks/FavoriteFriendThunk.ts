import { basicApi } from '@redux/api/axiosConfig';
import { getFavoriteFriends, getFavoriteFriendsId } from '@redux/slice/favoriteFriendSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkzNDUwNDM3fQ.4npDBhlmIOgYbkOC_ilbu40Cmd3sHUf-GGgZ3C59fN1DFIj64oFol_b1LlGbIwmj_eY-jePj_YCivmxapGBs1Q';

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
  async (_, thunkApi) => {
    try {
      await basicApi({
        method: 'get',
        url: '/v1/favorite',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
