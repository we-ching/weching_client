import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    savePost: (state, action) => {
      state.contents = action.payload;
    },
  },
});
