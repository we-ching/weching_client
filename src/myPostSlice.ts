import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myPosts: [],
  isClicked: false,
  clickedReview: 0,
  getGoogleEmail: '',
  myReviews: [],
  mySetReviews: null,
};

export const myPostSlice = createSlice({
  name: 'myPost',
  initialState,
  reducers: {
    getPosts: (state: any, action) => {
      state.myPosts = [...state.myPosts, ...action.payload];
    },
    isClicked: (state: any, action) => {
      state.isClicked = action.payload;
    },
    clickedReview: (state: any, action) => {
      state.clickedReview = action.payload;
    },
    getGoogleEmail: (state: any, action) => {
      state.getGoogleEmail = action.payload;
    },
    updateReviews: (state: any, action) => {
      state.myReviews = [...state.myReviews, ...action.payload];
    },
    setReviews: (state: any, action) => {
      state.mySetReviews = action.payload;
    },
  },
});

export const {
  getPosts,
  isClicked,
  clickedReview,
  getGoogleEmail,
  updateReviews,
  setReviews,
} = myPostSlice.actions;
