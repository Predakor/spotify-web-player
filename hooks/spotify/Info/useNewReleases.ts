import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type Releases = SpotifyApi.ListOfNewReleasesResponse;
function useNewReleases() {
  const [releases, actions] = useFetchedValue<Releases>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const request = await spotifyApi.getNewReleases({ limit: 10 });
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail('There was an error while getting your playlists');
      }
    };
    fetchPlaylists();
  }, [spotifyApi]);

  return releases;
}
export default useNewReleases;
