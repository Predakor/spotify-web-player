import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import currentSongSlice from './currentSongSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      song: currentSongSlice.reducer,
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

export const wrapper = createWrapper<AppStore>(makeStore);
