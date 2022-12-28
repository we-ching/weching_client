import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  subInfo: {},
  alarm: 0,
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
    insertAlarm: (state: any, action) => {
      state.alarm = action.payload;
    },
  },
});

export const { insertUser, insertSub, insertAlarm } = mainSlice.actions;
