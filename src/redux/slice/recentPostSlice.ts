import { getRecentPostThunk } from '@redux/thunks/HomeThunk';
import { createSlice } from '@reduxjs/toolkit';

export interface RecentPostState {
  recentPost: {
    noticeId: number;
    noticeTitle: string;
    noticeStatus: string;
    thumbnail: string;
    authorName: string;
    catName: string;
    catSpecies: string;
    shelterCity: string;
    applicationCount: number;
    commentCount: number;
    createdAt: string;
  }[];
}

const initialState: RecentPostState = {
  recentPost: [],
};

const recentPostSlice = createSlice({
  name: 'recentPost',
  initialState,
  reducers: {
    getRecentPost: (state, action) => {
      state.recentPost = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecentPostThunk.pending, (_state, action) => {
        console.log('action', action.type);
      })
      .addCase(getRecentPostThunk.fulfilled, (_state, action) => {
        console.log(action.type);
      })
      .addCase(getRecentPostThunk.rejected, (_state, action) => {
        console.log(action.type);
      });
  },
});

export const { getRecentPost } = recentPostSlice.actions;

export default recentPostSlice.reducer;
