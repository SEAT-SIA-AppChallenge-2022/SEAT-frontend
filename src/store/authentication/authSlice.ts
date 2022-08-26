import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { User } from '@/types/User/type';

interface AuthState {
  allUsers: User[];
  currentUser: User | null;
}

const initialState: AuthState = {
  allUsers: [],
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setAllUsers, setCurrentUser } = authSlice.actions;

export const getAllUsers = (state: RootState): User[] | null => {
  return state.auth.allUsers;
};

export const getCurrentUser = (state: RootState): User | null => {
  return state.auth.currentUser;
};

export default authSlice.reducer;
