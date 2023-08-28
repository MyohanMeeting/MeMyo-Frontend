import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteFriends: [],
  isFavorite: false,
};

export const FavoriteFriendSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    getFavoriteFriends: (state, action) => {
      state.favoriteFriends = action.payload;
      return state;
    },
    setIsFavoriteFriends: (state, action) => {
      state.isFavorite = action.payload;
      return state;
    },
  },
});

export const { getFavoriteFriends, setIsFavoriteFriends } = FavoriteFriendSlice.actions;
export default FavoriteFriendSlice.reducer;
