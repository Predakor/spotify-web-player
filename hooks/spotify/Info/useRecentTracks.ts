import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import useSpotify from '../useSpotify';

type Recent = SpotifyApi.UsersRecentlyPlayedTracksResponse;
function useRecentTracks() {
  const [recent, actions] = useFetchedValue<Recent>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const featured = (await spotifyApi.getMyRecentlyPlayedTracks()).body;
        actions.fetchSucces(featured);
      } catch (error) {
        actions.fetchFail('There was an error while getting your playlists');
      }
    };
    fetchPlaylists();
  }, [spotifyApi]);

  return recent;
}
export default useRecentTracks;
