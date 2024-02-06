/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.username = payload.username;
      state.token = payload.token;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { reducer: authReducer } = authSlice;
export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth;
