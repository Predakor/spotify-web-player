import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: { inView: true },
  reducers: {
    changeInView: (state, action: { payload: boolean }) => {
      state.inView = action.payload;
    },
  },
});

export const { changeInView } = scrollSlice.actions;
export const selectInView = (state: AppState) => state.scroll.inView;

export default scrollSlice.reducer;
