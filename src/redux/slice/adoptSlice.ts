import { createSlice } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { getAdoptPostThunk } from '../thunks/AdoptThunk'
import { AdoptDetail, AdoptPost } from '../../types/Adopt'
=======
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk'
import { AdoptComment, AdoptDetail, AdoptPost } from '@/types/Adopt'
>>>>>>> develop



export interface AdoptState {
  page: number,
  limit: number,
  adoptDetail?: AdoptDetail,
  adoptForm?: Partial<Omit<AdoptDetail,'noticeId'>>,
<<<<<<< HEAD
  adoptPosts?:Array<AdoptPost> 
=======
  adoptPosts?: Array<AdoptPost>,
  adoptComments?:Array<AdoptComment>
>>>>>>> develop
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
    },
    setAdoptForm: (state, action) => {
<<<<<<< HEAD
      state.adoptForm = { ...state.adoptForm,...action.payload }
=======
      console.log('action', action);
      if ('cat' in action.payload) {
        state.adoptForm = {...state.adoptForm,cat:{...action.payload.cat}}
      }else if ('shelter' in action.payload) {
        state.adoptForm = {...state.adoptForm,shelter:{...action.payload.shelter}}
      } else {
        state.adoptForm = { ...state.adoptForm,...action.payload }
      }
      return state;
    },
    getAdoptComments: (state, action) => {
      state.adoptComments = action.payload;
>>>>>>> develop
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

<<<<<<< HEAD
export const { getAdoptPosts,getAdoptDetail,setAdoptForm } = adoptSlice.actions
=======
export const { getAdoptPosts,getAdoptDetail,setAdoptForm,getAdoptComments } = adoptSlice.actions
>>>>>>> develop


export default adoptSlice.reducer