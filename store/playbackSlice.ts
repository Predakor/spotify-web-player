import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';

type PlaybackState = SpotifyApi.CurrentPlaybackResponse;

type PlaybackSong = SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObjectFull;

const initialState: PlaybackState | undefined = {
  timestamp: 0,
  device: {
    id: '',
    is_active: false,
    is_restricted: false,
    name: '',
    type: '',
    volume_percent: 50,
  },
  actions: {
    disallows: {},
  },
  progress_ms: null,
  is_playing: false,
  item: null,
  context: null,
  currently_playing_type: 'unknown',
  shuffle_state: false,
  repeat_state: 'off',
};

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    tooglePlayback: (state, action: { payload: boolean }) => {
      if (state) state.is_playing = action.payload;
    },
    changePlayback: (state, action: { payload: PlaybackState }) => {
      state = action.payload;
    },
    changeSong: (state, action: { payload: PlaybackSong }) => {
      state.item = action.payload;
    },
  },
});

const selectTrack = (state: AppState) => state.playback.item;
const selectPlayback = (state: AppState) => state.playback;

export const { tooglePlayback, changePlayback, changeSong } =
  playbackSlice.actions;
export { selectTrack, selectPlayback };
export default playbackSlice.reducer;
