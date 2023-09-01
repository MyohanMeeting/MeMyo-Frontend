<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit'
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk'
import { AdoptApply, AdoptApplyObj, AdoptComment, AdoptDetail, AdoptForm, AdoptPost } from '@/types/Adopt'


=======
import { createSlice } from '@reduxjs/toolkit';
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk';
import { AdoptComment, AdoptDetail, AdoptPost } from '@/types/Adopt';
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc

export interface AdoptState {
  page: number;
  limit: number;
  adoptDetail?: AdoptDetail;
<<<<<<< HEAD
  adoptApply?: Partial<AdoptApply>;
  adoptApplyObj?: AdoptApplyObj;
  adoptForm: Partial<AdoptForm>;
=======
  adoptForm?: Partial<Omit<AdoptDetail, 'noticeId'>>;
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc
  adoptPosts?: Array<AdoptPost>;
  adoptComments?: Array<AdoptComment>;
}

// Define the initial state using that type
const initialState: AdoptState = {
  page: 0,
  limit: 0,
  adoptPosts: [],
<<<<<<< HEAD
  adoptApply:{},
  adoptForm: {}
}
=======
};
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc

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
      console.log('state', state);
      console.log('action', action.payload);

      let adoptForm = state.adoptForm as Partial<AdoptForm>;
      for (const [key, value] of Object.entries(action.payload)) {
        if (key === 'cat' || key === 'shelter') {
          console.log('key', key, value);
          adoptForm = { ...adoptForm, [key]: value };
        } else {
          adoptForm = { ...adoptForm, [key]: value };
        }
=======
      console.log('action', action);
      if ('cat' in action.payload) {
        state.adoptForm = { ...state.adoptForm, cat: { ...action.payload.cat } };
      } else if ('shelter' in action.payload) {
        state.adoptForm = { ...state.adoptForm, shelter: { ...action.payload.shelter } };
      } else {
        state.adoptForm = { ...state.adoptForm, ...action.payload };
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc
      }
      if (Object.keys(action.payload).length == 0) {
        adoptForm = {};
      }
      console.log('adoptForm', adoptForm);
      return { ...state, adoptForm: { ...adoptForm } };
    },
    getAdoptComments: (state, action) => {
      state.adoptComments = action.payload;
      return state;
    },
<<<<<<< HEAD
    setAdoptApply: (state, action) => {
      console.log('state', state);
      console.log('action', action.payload);

      let adoptApply = state.adoptApply as Partial<AdoptApply>;
      for (const [key, value] of Object.entries(action.payload)) {
        if (key === 'applicant' || key === 'survey') {
          console.log('key', key, value);
          adoptApply = { ...adoptApply, [key]: value };
        } else {
          adoptApply = { ...adoptApply, [key]: value };
        }
      }
      if (Object.keys(action.payload).length == 0) {
        adoptApply = {};
      }
   
      return { ...state, adoptApply: { ...adoptApply } };
    },
=======
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdoptPostThunk.pending, (_state, action) => {
        console.log('action', action.type);
      })
      .addCase(getAdoptPostThunk.fulfilled, (_state, action) => {
        console.log(action.type);
      })
      .addCase(getAdoptPostThunk.rejected, (_state, action) => {
        console.log(action.type);
      });
  },
});

<<<<<<< HEAD
export const { getAdoptPosts, getAdoptDetail, setAdoptForm, getAdoptComments, setAdoptApply } =
  adoptSlice.actions;
=======
export const { getAdoptPosts, getAdoptDetail, setAdoptForm, getAdoptComments } = adoptSlice.actions;
>>>>>>> 4fa95e52cdb971b06bf736507553c905259ed8dc

export default adoptSlice.reducer;
