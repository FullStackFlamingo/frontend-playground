import * as toolkitRaw from '@reduxjs/toolkit'; // https://github.com/reduxjs/redux-toolkit/issues/1960
const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { combineReducers } from 'redux';
import { sliceCounter } from './sliceCounter';

const rootReducer = combineReducers({ counter: sliceCounter.reducer });
export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (preloadedState?: object) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });
