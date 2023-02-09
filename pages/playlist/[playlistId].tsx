import { useEffect, useState } from 'react';
import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import TrackList from '@components/Playlist/PlaylistTracks';
import useSpotifyControls from '@hooks/useSpotifyControls';
import { useRouter } from 'next/router';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

const Playlist = () => {
  const router = useRouter();

  const { playlistId } = router.query;
  const { getPlaylistTracks } = useSpotifyControls();
  const [playlistData, setPlaylistData] = useState<PlaylistType>();

  useEffect(() => {
    if (!playlistId) return;
    const id = playlistId.toString();

    getPlaylistTracks(id).then((response) => {
      setPlaylistData(response);
    });
  }, [playlistId]);

  if (!playlistData) return <h3>loading</h3>;

  return (
    <section className="relative flex flex-col gap-10 py-5 ">
      <PlaylistHeader playlist={playlistData} />
      <TrackList tracks={playlistData.tracks.items} />
    </section>
  );
};
export default Playlist;
