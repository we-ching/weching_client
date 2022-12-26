import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainInfo: {},
};

export const mainSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {
    insertMain: (state: any, action) => {
      state.mainInfo = { ...state.mainInfo, ...action.payload };
    },
  },
});

export const { insertMain } = mainSlice.actions;
