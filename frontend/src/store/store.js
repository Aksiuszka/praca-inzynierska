import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { authReducer } from '../slices/authSlice';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
