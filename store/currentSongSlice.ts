import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSong: '',
};

export default createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeSong(state, action) {
      state.currentSong = action.payload.song;
    },
  },
});
