import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  subInfo: {},
};

export const mainSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {
    insertUser: (state: any, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    insertSub: (state: any, action) => {
      state.subInfo = { ...state.subInfo, ...action.payload };
    },
  },
});

export const { insertUser, insertSub } = mainSlice.actions;
