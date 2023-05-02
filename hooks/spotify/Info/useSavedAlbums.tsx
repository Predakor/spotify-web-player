import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type Playlists = SpotifyApi.UsersSavedAlbumsResponse;
function useSavedAlbums() {
  const [savedAlbums, actions] = useFetchedValue<Playlists>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const request = await spotifyApi.getMySavedAlbums();
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail('There was an error while getting your saved albums');
      }
    };
    fetchPlaylists();
  }, [actions, spotifyApi]);

  return savedAlbums;
}

export default useSavedAlbums;
