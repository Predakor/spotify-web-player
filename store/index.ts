import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import playbackSliceReducer, { playbackSlice } from './playbackSlice';
import deviceSliceReducer, { deviceSlice } from './deviceSlice';
import scrollSliceReducer, { scrollSlice } from './scrollSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      playback: playbackSliceReducer,
      device: deviceSliceReducer,
      scroll: scrollSliceReducer,
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
export const deviceActions = deviceSlice.actions;
export const scrollActions = scrollSlice.actions;

export const wrapper = createWrapper<AppStore>(makeStore);
