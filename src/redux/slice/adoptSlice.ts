import { createSlice } from '@reduxjs/toolkit';
import { getAdoptPostThunk, setAdoptComments } from '@redux/thunks/AdoptThunk';
import {
  AdoptApply,
  AdoptApplyObj,
  AdoptComment,
  AdoptDetail,
  AdoptForm,
  AdoptPost,
} from '@/types/Adopt';

export interface AdoptState {
  page: number;
  limit: number;
  adoptDetail?: AdoptDetail;
  adoptApply?: Partial<AdoptApply>;
  adoptApplyObj?: AdoptApplyObj;
  adoptForm: Partial<AdoptForm>;
  adoptPosts?: Array<AdoptPost>;
  adoptComments?: Array<AdoptComment>;
}

// Define the initial state using that type
const initialState: AdoptState = {
  page: 0,
  limit: 0,
  adoptPosts: [],
  adoptApply: {},
  adoptForm: {},
};

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
    builder
      .addCase(setAdoptComments.pending, (_state, action) => {
        console.log('action', action.type);
      })
      .addCase(setAdoptComments.fulfilled, (_state, action) => {
        console.log(action.type);
      })
      .addCase(setAdoptComments.rejected, (_state, action) => {
        console.log(action.type);
      });
  },
});

export const { getAdoptPosts, getAdoptDetail, setAdoptForm, getAdoptComments, setAdoptApply } =
  adoptSlice.actions;

export default adoptSlice.reducer;
