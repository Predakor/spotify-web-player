import { createSlice } from '@reduxjs/toolkit';

export type songType = {
  song: string | undefined;
};

const initialState: songType = {
  song: '',
};

export const currentSongSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeSong: (state, action: { payload: string | undefined }) => {
      state.song = action.payload;
    },
  },
});
export const { changeSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;
