import { changeSong, tooglePlayback } from '@store/playbackSlice';
import { useDispatch, useSelector } from 'react-redux';

import { selectDevice } from 'store/deviceSlice';
import useSpotify from './useSpotify';

const Controls = () => {
  const spotifyApi = useSpotify();

  const dispatch = useDispatch();
  const { id } = useSelector(selectDevice);

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
      return !shuffle_state;
    },

    tooglePlayBack: async () => {
      const { is_playing } = await currentPlaybackState();
      is_playing ? controls.pause() : controls.resume();
      dispatch(tooglePlayback(is_playing));
      return !is_playing;
    },

    toogleRepeatState: async () => {
      const { repeat_state } = await currentPlaybackState();
      const nextState = getNextRepeatState(repeat_state);
      spotifyApi.setRepeat(nextState);
      return nextState;
    },

    playSong: (uri: string, id: string) => {
      // dispatch(changeSong(id));
      spotifyApi.play({ uris: [uri] });
    },

    playPlaylist: async (uri: string) => {
      await spotifyApi.play({ context_uri: uri });
      const currentSong = (await currentPlaybackState()).item;
      if (currentSong) dispatch(changeSong(currentSong));
    },

    transferPlayback: async (options: {
      deviceID?: string;
      playOnTransfer?: boolean;
    }) => {
      const { deviceID = id, playOnTransfer } = options;
      return spotifyApi.transferMyPlayback([deviceID || id], {
        play: playOnTransfer,
      });
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

const getNextRepeatState = (state: 'off' | 'context' | 'track') => {
  if (state === 'off') return 'context';
  if (state === 'context') return 'track';
  return 'off';
};
