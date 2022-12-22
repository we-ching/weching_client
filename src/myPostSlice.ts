import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myPosts: [],
};

export const myPostSlice = createSlice({
  name: 'myPost',
  initialState,
  reducers: {
    getPosts: (state: any, action) => {
      state.myPosts = [...state.myPosts, ...action.payload];
    },
  },
});

export const { getPosts } = myPostSlice.actions;
