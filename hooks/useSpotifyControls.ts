import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setShuffleState,
  setIsPlaying,
  setRepeatState,
  setPlaybackData,
} from '@store/playbackSlice';
import { RepeatState } from 'types/spotifyTypes';
import useSpotify from './useSpotify';

const Controls = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  useEffect(() => {
    controlsRef.current = controlsRef.current;
  }, [dispatch, spotifyApi]);

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
        const playbackState = (await spotifyApi.getMyCurrentPlaybackState())
          .body;
        dispatch(setPlaybackData(playbackState));
        return playbackState;
      } catch (error) {
        console.error('error in useSpotifyControls');
        throw error;
      }
    },

    getUserPlaylists: async (
      user?: string,
      options?: { limit?: number; offset?: number }
    ) => {
      try {
        if (!user) return spotifyApi.getUserPlaylists();
        return spotifyApi.getUserPlaylists(user, options);
      } catch (error) {
        console.error('error in useSpotifyControls');
        throw error;
      }
    },
  });

  return controlsRef.current;
};
export default Controls;

const getNextRepeatState = (state: RepeatState) => {
  if (state === 'off') return 'context';
  if (state === 'context') return 'track';
  return 'off';
};
