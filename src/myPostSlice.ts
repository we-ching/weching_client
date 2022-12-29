import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myPosts: [],
  isClicked: false,
  clickedReview: 0,
  getGoogleEmail: '',
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
  },
});

export const { getPosts, isClicked, clickedReview, getGoogleEmail } =
  myPostSlice.actions;
