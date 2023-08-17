import { createSlice } from '@reduxjs/toolkit'
import { getAdoptPostThunk } from '../thunks/AdoptThunk'
import { AdoptDetail, AdoptPost } from '../../types/Adopt'



interface AdoptState {
  page: number,
  limit: number,
  adoptDetail?: AdoptDetail,
  adoptPosts?:Array<AdoptPost> 
}

// Define the initial state using that type
const initialState: AdoptState = {
  page: 0,
  limit: 0,
  adoptPosts: []
}

export const adoptSlice = createSlice({
  name: 'adopt',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAdoptPosts: (state, action) => {
      if (!state.adoptPosts) {
        state.adoptPosts = [];
      }
      state.adoptPosts = action.payload;
      return state;
    },
    getAdoptDetail: (state, action) => {
      state.adoptDetail = action.payload;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdoptPostThunk.pending, (_state, action) => {
         console.log('action',action.type)
      })
    .addCase(getAdoptPostThunk.fulfilled, (_state, action) => {
                console.log(action.type);
            })
    .addCase(getAdoptPostThunk.rejected, (_state, action) => {
        console.log(action.type)
    })
  }
})

export const { getAdoptPosts,getAdoptDetail } = adoptSlice.actions


export default adoptSlice.reducer