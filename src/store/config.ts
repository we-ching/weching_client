import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../postSlice';

export const store = configureStore({
  reducer: { [postSlice.name]: postSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
