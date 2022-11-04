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

  return {
    nextSong: () => spotifyApi.skipToNext(),
    prevSong: () => spotifyApi.skipToPrevious(),
    toggleShuffle: () => spotifyApi.setShuffle(true),

    pause: () => spotifyApi.pause(),
    resume: () => spotifyApi.play(),

    playSong: (uri: string, id: string) => {
      dispatch(changeSong(id));
      spotifyApi.play({ uris: [uri] });
    },
    playPlaylist: async (uri: string) => {
      spotifyApi.play({ context_uri: uri });
      const currentSongID = (await currentPlaybackState()).item?.id;
      dispatch(changeSong(currentSongID));
    },

    repeatSong: async () => {
      const repeatState = (await currentPlaybackState()).repeat_state;

      if (repeatState === 'off') return spotifyApi.setRepeat('track');
      if (repeatState === 'track') return spotifyApi.setRepeat('context');
      return spotifyApi.setRepeat('off');
    },

    transferPlayback: (options: {
      deviceID?: string;
      playOnTransfer?: boolean;
    }) => {
      const { deviceID = id, playOnTransfer } = options;
      spotifyApi.transferMyPlayback([deviceID || id], { play: playOnTransfer });
    },

    getCurrentPlayback: async () => await currentPlaybackState(),
  };
};
export default Controls;
