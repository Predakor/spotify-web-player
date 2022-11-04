import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import currentSongReducer, { currentSongSlice } from './currentSongSlice';
import deviceSliceReducer, { deviceSlice } from './deviceSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      song: currentSongReducer,
      device: deviceSliceReducer,
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

export const songActions = currentSongSlice.actions;
export const deviceActions = deviceSlice.actions;

export const wrapper = createWrapper<AppStore>(makeStore);
