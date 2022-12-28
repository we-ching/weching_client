import { configureStore } from '@reduxjs/toolkit';
import { myPostSlice } from '../myPostSlice';
import { mainSlice } from '../mainSlice';
import { noticeSlice } from '../noticeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [myPostSlice.name]: myPostSlice.reducer,
    [mainSlice.name]: mainSlice.reducer,
    [noticeSlice.name]: noticeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
