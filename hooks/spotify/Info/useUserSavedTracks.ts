import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type SavedTracks = SpotifyApi.UsersSavedTracksResponse;
function useUserSavedTracks() {
  const spotifyApi = useSpotify();
  const [tracks, actions] = useFetchedValue<SavedTracks>();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const request = await spotifyApi.getMySavedTracks();
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail('There was an error while getting your playlists');
      }
    };
    fetchTracks();
  }, [spotifyApi]);

  return tracks;
}
export default useUserSavedTracks;
