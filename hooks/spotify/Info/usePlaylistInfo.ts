import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useRouter } from 'next/router';
import useSpotify from '../useSpotify';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

function usePlaylistTracks(_id?: string) {
  const router = useRouter();
  const spotifyApi = useSpotify();
  const [playlistData, actions] = useFetchedValue<PlaylistType>();

  const { playlistid } = router.query;
  const id = _id ?? playlistid;

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await spotifyApi.getPlaylist(id as string);
        actions.fetchSucces(data.body);
      } catch (error) {
        actions.fetchFail('There was an error while getting data');
      }
    };
    id && fetchPlaylist();
  }, [actions, id, spotifyApi]);

  return [playlistData, spotifyApi.getPlaylist] as const;
}
export default usePlaylistTracks;
