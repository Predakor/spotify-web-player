import useFetchingFunction from '@hooks/fetch/useFetch';
import useSpotify from '../useSpotify';

function useInfo() {
  const s = useSpotify();

  const newReleases = useFetchingFunction(() => s.getNewReleases());
  const userTopTracks = useFetchingFunction(() => s.getMyTopTracks());
  const userTopArtists = useFetchingFunction(() => s.getMyTopArtists());
  const featuredPlaylists = useFetchingFunction(() => s.getFeaturedPlaylists());
  return { newReleases, userTopTracks, userTopArtists, featuredPlaylists };
}
export default useInfo;
