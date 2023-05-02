import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type Playlists = SpotifyApi.UsersFollowedArtistsResponse;
function useFollowedArtists() {
  const [followedArtists, actions] = useFetchedValue<Playlists>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const request = await spotifyApi.getFollowedArtists();
        actions.fetchSucces(request.body);
      } catch (error) {
        console.log(error);

        actions.fetchFail(
          'There was an error while getting your followed artists'
        );
      }
    };
    fetchPlaylists();
  }, [actions, spotifyApi]);

  return followedArtists;
}

export default useFollowedArtists;
