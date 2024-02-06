/* eslint-disable prefer-destructuring */
// eslint-disable-next-line import/no-unresolved
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../shared/constants/base_api';

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

export const baseQueryWithLogout = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);

  return result;
};
