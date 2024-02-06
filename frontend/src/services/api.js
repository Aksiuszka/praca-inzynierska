/* eslint-disable prefer-destructuring */
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../shared/constants/base_api';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,

    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
