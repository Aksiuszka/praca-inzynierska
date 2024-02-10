/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.email = payload.email;
      state.token = payload.token;
      state.username = payload.username;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { reducer: authReducer } = authSlice;
export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth;
