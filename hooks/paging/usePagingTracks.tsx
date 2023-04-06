import useSpotify from '@hooks/spotify/useSpotify';
import usePaging from '.';
import { Paging } from './usePaging';

type Tracks = SpotifyApi.PlaylistTrackObject;

function usePagingTracks(id: string, pagingTracks: Paging<Tracks>) {
  const spotifyApi = useSpotify();
  const fetchTracks = async (offset: number, limit?: number) => {
    const request = spotifyApi.getPlaylistTracks(id, {
      offset,
      limit: limit ?? 20,
    });
    return (await request).body;
  };

  const [{ items }, getMore] = usePaging(pagingTracks, (start, count) =>
    fetchTracks(count)
  );

  return items;
}
export default usePagingTracks;
