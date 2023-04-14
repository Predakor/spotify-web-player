import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import useSpotify from '../useSpotify';

type TopTracks = SpotifyApi.UsersTopArtistsResponse;
function useTopArtists() {
  const [artists, actions] = useFetchedValue<TopTracks>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetch = async () => {
      try {
        const request = await spotifyApi.getMyTopArtists({ limit: 10 });
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetch();
  }, [actions, spotifyApi]);

  return artists;
}

export default useTopArtists;
