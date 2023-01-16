import { useDispatch, useSelector } from 'react-redux';
import { changeSong } from 'store/currentSongSlice';
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
      return !is_playing;
    },

    toogleRepeatState: async () => {
      const { repeat_state } = await currentPlaybackState();
      const nextState = getNextRepeatState(repeat_state);
      spotifyApi.setRepeat(nextState);
      return nextState;
    },

    playSong: (uri: string, id: string) => {
      dispatch(changeSong(id));
      spotifyApi.play({ uris: [uri] });
    },

    playPlaylist: async (uri: string) => {
      spotifyApi.play({ context_uri: uri });
      const currentSongID = (await currentPlaybackState()).item?.id;
      dispatch(changeSong(currentSongID));
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
  };
  return controls;
};
export default Controls;

const getNextRepeatState = (state: 'off' | 'context' | 'track') => {
  if (state === 'off') return 'context';
  if (state === 'context') return 'track';
  return 'off';
};
