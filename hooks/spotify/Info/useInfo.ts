import SpotifyWebApi from 'spotify-web-api-node';
import useSpotify from '../useSpotify';

function useInfo(infoType: SpotifyWebApi) {
  const spotifyApi = useSpotify();
  const infos = {
    userSavedTracks: () => spotifyApi.getMySavedTracks,
  };
  return infos;
}
export default useInfo;
