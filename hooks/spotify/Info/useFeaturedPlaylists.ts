import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type Playlists = SpotifyApi.ListOfFeaturedPlaylistsResponse;
function useFeaturedPlaylists() {
  const [featuredPlaylists, actions] = useFetchedValue<Playlists>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const request = await spotifyApi.getFeaturedPlaylists({ limit: 10 });
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail('There was an error while getting your playlists');
      }
    };
    fetchPlaylists();
  }, [spotifyApi]);

  return featuredPlaylists;
}

export default useFeaturedPlaylists;
