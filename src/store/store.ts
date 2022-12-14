import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui/uiSlice';
import attractionReducer from './attractions/attractionSlice';
import authReducer from './authentication/authSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    attraction: attractionReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
