import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteFriends: [],
  isFavorite: false,
  favoriteId: '',
};

export const FavoriteFriendSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    getFavoriteFriends: (state, action) => {
      state.favoriteFriends = action.payload;
      return state;
    },
    getFavoriteFriendsId: (state, action) => {
      state.favoriteId = action.payload;
      return state;
    },
  },
});

export const { getFavoriteFriends, getFavoriteFriendsId } = FavoriteFriendSlice.actions;
export default FavoriteFriendSlice.reducer;
