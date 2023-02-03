import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import devicesSliceReducer, { devicesSlice } from './devicesSlice';
import playbackSliceReducer, { playbackSlice } from './playbackSlice';
import scrollSliceReducer, { scrollSlice } from './scrollSlice';
import searchSliceReducer, { searchSlice } from './searchSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      playback: playbackSliceReducer,
      devices: devicesSliceReducer,
      scroll: scrollSliceReducer,
      search: searchSliceReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const playbackActions = playbackSlice.actions;
export const devicesActions = devicesSlice.actions;
export const scrollActions = scrollSlice.actions;
export const searchActions = searchSlice.actions;

export const wrapper = createWrapper<AppStore>(makeStore);
