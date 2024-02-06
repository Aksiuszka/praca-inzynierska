import { api } from './api';

export const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'accounts:signInWithPassword?key=AIzaSyBB1w53vqOzDjYreV4cDfYIwKGHDEE5Hb8',
        contentType: 'application/json',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: 'accounts:signUp?key=AIzaSyBB1w53vqOzDjYreV4cDfYIwKGHDEE5Hb8',
        contentType: 'application/json',
        method: 'POST',
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: 'accounts:sendOobCode?key=AIzaSyBB1w53vqOzDjYreV4cDfYIwKGHDEE5Hb8',
        contentType: 'application/json',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useResetPasswordMutation } = auth;
