import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { counterSlice } from './counterSlice';

const rootReducer = combineReducers({ counter: counterSlice.reducer });
export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (preloadedState?: object) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });
