import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetRecentPostResponse } from '../../apis/api/home/getRecentPost';

interface RecentPostState {
  recentPost: GetRecentPostResponse[];
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
    getRecentPostSuccess: (state, action: PayloadAction<Array<GetRecentPostResponse>>) => {
      console.log('Payload:', action.payload);
      state.status = 'succeeded';
      state.recentPost = action.payload;
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
