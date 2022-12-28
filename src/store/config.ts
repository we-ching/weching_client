import { configureStore } from '@reduxjs/toolkit';
import { myPostSlice } from '../myPostSlice';
import { mainSlice } from '../mainSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [myPostSlice.name]: myPostSlice.reducer,
    [mainSlice.name]: mainSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
