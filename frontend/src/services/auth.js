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
    loginWithGoogle: builder.mutation({
      query: (credentials) => ({
        url: 'accounts:signInWithIdp?key=AIzaSyBB1w53vqOzDjYreV4cDfYIwKGHDEE5Hb8',
        contentType: 'application/json',
        method: 'POST',
        body: {
          postBody: `id_token=${credentials.accessToken}&providerId=[google.com]`,
          requestUri: credentials.requestUri,
          returnIdpCredential: true,
          returnSecureToken: true,
        },
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

export const {
  useLoginMutation,
  useSignupMutation,
  useResetPasswordMutation,
  useLoginWithGoogleMutation,
} = auth;
