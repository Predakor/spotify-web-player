import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type TopTracks = SpotifyApi.UsersTopTracksResponse;

function useTopItems() {
  const [value, actions] = useFetchedValue<TopTracks>();
  const spotifyfApi = useSpotify();

  useEffect(() => {
    const fetchTopItems = async () => {
      try {
        const request = await spotifyfApi.getMyTopTracks({ limit: 10 });
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail(`Something went wrong ${error}`);
      }
    };
    fetchTopItems();
  }, [actions, spotifyfApi]);

  return value;
}
export default useTopItems;
