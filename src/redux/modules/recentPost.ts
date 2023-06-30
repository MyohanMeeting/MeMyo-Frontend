import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetRecentPostResponse } from '../../apis/api/home/getRecentPost';

interface RecentPostState {
  recentPost: {
    adoptNoticeId: number;
    catId: number;
    name: string;
    thumbnail: string;
    registNumber: number;
    species: string;
  }[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RecentPostState = {
  recentPost: [],
  status: 'idle',
  error: null,
};

const recentPostSlice = createSlice({
  name: 'recentPost',
  initialState,
  reducers: {
    getRecentPostStart: (state) => {
      state.status = 'loading';
    },
    getRecentPostSuccess: (state, action: PayloadAction<GetRecentPostResponse>) => {
      state.status = 'succeeded';
      state.recentPost = action.payload.data.recentPost;
    },
    getRecentPostFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { getRecentPostStart, getRecentPostSuccess, getRecentPostFailure } =
  recentPostSlice.actions;

export default recentPostSlice.reducer;
