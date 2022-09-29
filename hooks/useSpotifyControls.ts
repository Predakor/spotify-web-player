import { useDispatch } from 'react-redux';
import { changeSong } from 'store/currentSongSlice';
import useSpotify from './useSpotify';

const Controls = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const currentPlaybackState = async () => {
    return (await spotifyApi.getMyCurrentPlaybackState()).body;
  };

  return {
    nextSong: () => spotifyApi.skipToNext(),
    prevSong: () => spotifyApi.skipToPrevious(),
    toogleShugle: () => spotifyApi.setShuffle(true),

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

      if (repeatState === 'context') return spotifyApi.setRepeat('track');
      if (repeatState === 'track') return spotifyApi.setRepeat('context');
      return spotifyApi.setRepeat('off');
    },
  };
};
export default Controls;
