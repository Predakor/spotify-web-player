import { useEffect } from 'react';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import useSpotify from '../useSpotify';

type UserPlaylists =
  | SpotifyApi.ListOfUsersPlaylistsResponse
  | SpotifyApi.ListOfCurrentUsersPlaylistsResponse;

function useUserPlaylists(
  id?: string,
  options?: { limit?: number; offset?: number }
) {
  const [userPlaylists, actions] = useFetchedValue<UserPlaylists>();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const request = id
          ? spotifyApi.getUserPlaylists(id, options)
          : spotifyApi.getUserPlaylists(options);
        actions.fetchSucces((await request).body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetchUserPlaylists();
  }, [actions, id, options, spotifyApi]);

  return userPlaylists;
}

export default useUserPlaylists;
