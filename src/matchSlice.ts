import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  matchPost: {},
};

export const matchSlice = createSlice({
  name: 'matchPost',
  initialState,
  reducers: {
    getPost: (state: any, action) => {
      state.matchPost = { ...state.matchPost, ...action.payload };
    },
  },
});

export const { getPost } = matchSlice.actions;
