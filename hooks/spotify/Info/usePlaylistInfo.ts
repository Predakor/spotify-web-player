import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import { useRouter } from 'next/router';
import useSpotifyControls from '../controls/usePlaybackControls';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

function usePlaylistInfo() {
  const router = useRouter();
  const { playlistId } = router.query;

  const [playlistData, actions] = useFetchedValue<PlaylistType | null>();
  const { getPlaylistTracks } = useSpotifyControls();

  useEffect(() => {
    if (!playlistId) return;
    const id = playlistId.toString();

    const getPlaylist = async () => {
      try {
        const data = await getPlaylistTracks(id);
        actions.fetchSucces(data);
      } catch (error) {
        actions.fetchFail('There was an error while getting data');
      }
    };
    getPlaylist();
  }, [actions, getPlaylistTracks, playlistId]);
  return playlistData;
}
export default usePlaylistInfo;
