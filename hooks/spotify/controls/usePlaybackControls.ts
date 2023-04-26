import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsPlaying,
  setPlaybackData,
  setRepeatState,
  setShuffleState,
} from '@store/playbackSlice';
import { RepeatState } from 'types/spotifyTypes';
import useSpotify from '../useSpotify';

function PlaybackControls() {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const controlsRef = useRef({
    pause: () => spotifyApi.pause(),
    resume: () => spotifyApi.play(),
    playback: async () => (await spotifyApi.getMyCurrentPlaybackState()).body,

    nextSong: async () => {
      try {
        await spotifyApi.skipToNext();
        controlsRef.current.getCurrentPlayback();
      } catch (error) {
        throw error;
      }
    },

    prevSong: async () => {
      try {
        await spotifyApi.skipToPrevious();
        controlsRef.current.getCurrentPlayback();
      } catch (error) {
        throw error;
      }
    },

    toggleShuffle: async () => {
      try {
        const { shuffle_state } = await controlsRef.current.playback();
        spotifyApi.setShuffle(!shuffle_state);
        dispatch(setShuffleState(!shuffle_state));
      } catch (error) {
        throw error;
      }
    },

    tooglePlayBack: async () => {
      try {
        const { is_playing } = await controlsRef.current.playback();
        const { pause, resume } = controlsRef.current;
        is_playing ? pause() : resume();
        dispatch(setIsPlaying(!is_playing));
        return !is_playing;
      } catch (error) {
        throw error;
      }
    },

    toogleRepeatState: async () => {
      try {
        const { repeat_state } = await controlsRef.current.playback();
        const nextState = getNextRepeatState(repeat_state);
        spotifyApi.setRepeat(nextState);
        dispatch(setRepeatState(nextState));
        return nextState;
      } catch (error) {
        console.error('error in useSpotifyControls');
        throw error;
      }
    },

    getCurrentPlayback: async function () {
      try {
        const playbackState = await controlsRef.current.playback();
        dispatch(setPlaybackData(playbackState));
        return playbackState;
      } catch (error) {
        console.error('error in useSpotifyControls');
        throw error;
      }
    },

    playPlaylist: async (uri: string, target?: string) => {
      try {
        await spotifyApi.play({
          context_uri: uri,
          device_id: target,
          position_ms: 1,
        });
      } catch (error) {
        console.error(error + 'in spotify controls');
        throw error;
      }
    },
    playSong: async (uris: string[], target: string) => {
      try {
        await spotifyApi.play({
          uris: uris,
          device_id: target,
          position_ms: 1,
        });
      } catch (error) {
        console.error(error + 'in spotify controls');
        throw error;
      }
    },
    getPlaylistTracks: async (id: string) => {
      try {
        const data = await spotifyApi.getPlaylist(id);
        return data.body;
      } catch (error) {
        throw error;
      }
    },
  });

  return controlsRef.current;
}
export default PlaybackControls;

const getNextRepeatState = (state: RepeatState) => {
  if (state === 'off') return 'context';
  if (state === 'context') return 'track';
  return 'off';
};
