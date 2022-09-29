import { createSlice } from '@reduxjs/toolkit';

export const currentSongSlice = createSlice({
  name: 'song',
  initialState: {
    currentSong: '',
  },
  reducers: {
    changeSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});
export const { changeSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;
