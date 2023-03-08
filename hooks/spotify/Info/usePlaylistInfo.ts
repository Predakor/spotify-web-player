import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSpotifyControls from '../controls/usePlaybackControls';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

function usePlaylistInfo() {
  const router = useRouter();
  const { playlistId } = router.query;

  const [playlistData, setPlaylistData] = useState<PlaylistType | null>();
  const { getPlaylistTracks } = useSpotifyControls();

  useEffect(() => {
    if (!playlistId) return;
    const id = playlistId.toString();

    const getPlaylist = async () => {
      try {
        const data = await getPlaylistTracks(id);
        if (data) return setPlaylistData(data);
      } catch (error) {
        return setPlaylistData(null);
      }
    };
    getPlaylist();
  }, [getPlaylistTracks, playlistId]);
  return playlistData;
}
export default usePlaylistInfo;
