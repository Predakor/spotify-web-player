import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RepeatState } from 'types/spotifyTypes';
import { AppState } from '.';

type PlaybackData = SpotifyApi.CurrentPlaybackResponse;
export interface PlaybackState {
  status: 'pending' | 'completed' | undefined;
  data: PlaybackData | null | undefined;
}
const initialState: PlaybackState = {
  status: undefined,
  data: undefined,
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setPlaybackData: (state, action: { payload: PlaybackData }) => {
      state.data = action.payload;
    },
    setIsPlaying: (state, action: { payload: boolean }) => {
      if (state.data) state.data.is_playing = action.payload;
    },
    setShuffleState: (state, action: { payload: boolean }) => {
      if (state.data) state.data.shuffle_state = action.payload;
    },
    setRepeatState: (state, action: { payload: RepeatState }) => {
      if (state.data) state.data.repeat_state = action.payload;
    },
    setPostion: (state, action: { payload: number }) => {
      if (state.data) state.data.timestamp = action.payload;
    },
  },
});
const selectIsPlaying = (state: AppState) => state.playback.data?.is_playing;
const selectPlaybackSlice = (state: AppState) => state.playback;
const selectPlaybackData = (state: AppState) => state.playback.data;
const selectTrack = (state: AppState) => state.playback.data?.item;
const selectProgress = (state: AppState) => state.playback.data?.progress_ms;

export const {
  setIsPlaying,
  setPostion,
  setRepeatState,
  setShuffleState,
  setPlaybackData,
} = playbackSlice.actions;
export {
  selectIsPlaying,
  selectPlaybackSlice,
  selectPlaybackData,
  selectTrack,
  selectProgress,
};
export default playbackSlice.reducer;
