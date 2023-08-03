import { createSlice } from '@reduxjs/toolkit'
import getAdoptPostThunk from '../thunks/AdoptThunk'

// Define a type for the slice state
interface AdoptPostState {
   noticeId:number,
   noticeTitle: string,
   noticeStatus: string,
   thumbnail: string,
   authorName: string,
   catName: string,
   catSpecies: string,
   shelterCity: string,
   applicationCount: number,
   commentCount: number,
   createdAt: string
}

interface AdoptState {
  page: number,
  limit: number,
  adoptPosts?:Array<AdoptPostState> 
}

// Define the initial state using that type
const initialState: AdoptState = {
  page: 0,
  limit:0,
  adoptPosts: [ {
      noticeId: 0,
      noticeTitle: "루루",
      noticeStatus: "접수중",
      thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800",
      authorName: "라라",
      catName: "루루1",
      catSpecies: "스코티시폴드",
      shelterCity: "서울",
      applicationCount: 0,
      commentCount: 0,
      createdAt: "2023-08-03T08:25:11.951Z"
  },
    {
      noticeId: 1,
      noticeTitle: "루루",
      noticeStatus: "접수중",
      thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800",
      authorName: "라라",
      catName: "루루2",
      catSpecies: "스코티시폴드",
      shelterCity: "서울",
      applicationCount: 0,
      commentCount: 0,
      createdAt: "2023-08-03T08:25:11.951Z"
    },
    {
      noticeId: 2,
      noticeTitle: "루루",
      noticeStatus: "접수중",
      thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800",
      authorName: "라라",
      catName: "루루3",
      catSpecies: "스코티시폴드",
      shelterCity: "서울",
      applicationCount: 0,
      commentCount: 0,
      createdAt: "2023-08-03T08:25:11.951Z"
    },
     {
      noticeId: 3,
      noticeTitle: "루루",
      noticeStatus: "접수중",
      thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800",
      authorName: "라라",
      catName: "루루4",
      catSpecies: "스코티시폴드",
      shelterCity: "서울",
      applicationCount: 0,
      commentCount: 0,
      createdAt: "2023-08-03T08:25:11.951Z"
    }
  ]
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdoptPostThunk.pending, (state, action) => {
         console.log('action',action.type,state)
      })
    .addCase(getAdoptPostThunk.fulfilled, (state, action) => {
                console.log(action.type,state);
            })
    .addCase(getAdoptPostThunk.rejected, (state, action) => {
        console.log(action.type,state)
    })
  }
})

export const { getAdoptPosts } = adoptSlice.actions


export default adoptSlice.reducer