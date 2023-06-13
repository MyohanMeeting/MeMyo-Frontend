import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface isFavoriteState {
  isFavorite: boolean;
}

const initialState: isFavoriteState = {
  isFavorite: false,
};

const favoriteCatSlice = createSlice({
  name: 'favoriteCat',
  initialState,
  reducers: {
    clickHeartHandler: (state, action: PayloadAction<boolean>) => {
      state.isFavorite = action.payload;
    },
  },
});

export const { clickHeartHandler } = favoriteCatSlice.actions;

export default favoriteCatSlice.reducer;
