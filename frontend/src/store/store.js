import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
