import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'store';

export type deviceState = {
  id: string;
  active: boolean;
};

const initialState: deviceState = { id: '1', active: false };

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    changeID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    changeActive(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
  },
});

export const { changeID, changeActive } = deviceSlice.actions;
export const selectDevice = (state: AppState) => state.device;
export default deviceSlice.reducer;
