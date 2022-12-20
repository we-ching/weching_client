import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../postSlice';
import { myPostSlice } from '../myPostSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer,
    [myPostSlice.name]: myPostSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
