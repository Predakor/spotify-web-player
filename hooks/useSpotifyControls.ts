import useSpotify from './useSpotify';

const Controls = () => {
  const spotifyApi = useSpotify();

  const currentPlaybackState = async () => {
    return (await spotifyApi.getMyCurrentPlaybackState()).body;
  };

  return {
    nextSong: () => spotifyApi.skipToNext(),
    prevSong: () => spotifyApi.skipToPrevious(),
    toogleShugle: () => spotifyApi.setShuffle(true),
    pause: () => spotifyApi.pause(),
    play: (uri?: string) => {
      return uri ? spotifyApi.play({ uris: [uri] }) : spotifyApi.play();
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
