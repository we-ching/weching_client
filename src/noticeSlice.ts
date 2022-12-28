import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  noticeID: 0,
};

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    delNotice: (state: any, action) => {
      state.noticeID = action.payload;
    },
  },
});

export const { delNotice } = noticeSlice.actions;
