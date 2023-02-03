import { useDispatch } from 'react-redux';
import {
  setShuffleState,
  setIsPlaying,
  setRepeatState,
} from '@store/playbackSlice';
import { RepeatState } from 'types/spotifyTypes';
import useSpotify from './useSpotify';

const Controls = () => {
  const spotifyApi = useSpotify();

  const dispatch = useDispatch();

  const currentPlaybackState = async () => {
    return (await spotifyApi.getMyCurrentPlaybackState()).body;
  };

  const controls = {
    nextSong: () => spotifyApi.skipToNext(),
    prevSong: () => spotifyApi.skipToPrevious(),

    pause: () => spotifyApi.pause(),
    resume: () => spotifyApi.play(),

    toggleShuffle: async () => {
      const { shuffle_state } = await currentPlaybackState();
      spotifyApi.setShuffle(!shuffle_state);
      dispatch(setShuffleState(!shuffle_state));
      return !shuffle_state;
    },

    tooglePlayBack: async () => {
      const { is_playing } = await currentPlaybackState();
      is_playing ? controls.pause() : controls.resume();
      dispatch(setIsPlaying(!is_playing));
      return !is_playing;
    },

    toogleRepeatState: async () => {
      const { repeat_state } = await currentPlaybackState();
      const nextState = getNextRepeatState(repeat_state);
      spotifyApi.setRepeat(nextState);
      dispatch(setRepeatState(nextState));
      return nextState;
    },

    playSong: (uri: string, id: string) => {
      // dispatch(changeSong(id));
      spotifyApi.play({ uris: [uri] });
    },

    playPlaylist: async (uri: string) => {
      await spotifyApi.play({ context_uri: uri });
      const currentSong = await currentPlaybackState();
      // if (currentSong) dispatch(selectPlaybackData(currentSong));
    },

    getCurrentPlayback: async () => currentPlaybackState(),
    getUserPlaylists: async (
      user?: string,
      options?: { limit?: number; offset?: number }
    ) => {
      if (!user) return spotifyApi.getUserPlaylists();
      return spotifyApi.getUserPlaylists(user, options);
    },
  };
  return controls;
};
export default Controls;

const getNextRepeatState = (state: RepeatState) => {
  if (state === 'off') return 'context';
  if (state === 'context') return 'track';
  return 'off';
};
