import { basicApi } from '@redux/api/axiosConfig';
import { getFavoriteFriends, getFavoriteFriendsId } from '@redux/slice/favoriteFriendSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkzMjc0OTE2fQ.A7tqB0-7Wpc3x1AsBLtuhdcK2gCgYpVtSaQJVU7ujhTVnJlglySjxwboJE_Kwy2AR70nY12VeawsIDcpsCv-EQ';

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
