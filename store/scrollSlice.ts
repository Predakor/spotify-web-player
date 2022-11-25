import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';

export type scrollType = { inView: boolean };

const initialState: scrollType = { inView: true };

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    changeInView: (state, action: { payload: boolean }) => {
      state.inView = action.payload;
    },
  },
});

export const { changeInView } = scrollSlice.actions;
export const selectInView = (state: AppState) => state.scroll.inView;

export default scrollSlice.reducer;
