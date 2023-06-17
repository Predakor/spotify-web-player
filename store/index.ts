import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import devicesSliceReducer, { devicesSlice } from './devicesSlice';
import { loadState } from './localStorage';
import notificationReducer, { notificationSlice } from './notificationSlice';
import playbackSliceReducer, { playbackSlice } from './playbackSlice';
import searchSliceReducer, { recentSearchSlice } from './recentSearchSlice';
import scrollSliceReducer, { scrollSlice } from './scrollSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      playback: playbackSliceReducer,
      devices: devicesSliceReducer,
      scroll: scrollSliceReducer,
      search: searchSliceReducer,
      notification: notificationReducer,
    },
    preloadedState: loadState(),
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
export const searchActions = recentSearchSlice.actions;
export const notificationActions = notificationSlice.actions;

export const wrapper = createWrapper<AppStore>(makeStore);
