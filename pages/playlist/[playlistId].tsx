import { useEffect, useState } from 'react';
import PlaylistHeader from '@components/PlaylistHeader/PlaylistHeader';
import TrackList from '@components/TrackList/TrackList';
import useSpotify from 'hooks/useSpotify';
import { useRouter } from 'next/router';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

const Playlist = () => {
  const router = useRouter();
  const spotifyApi = useSpotify();

  const playlistId = router.query.playlistId as string;
  const [playlistData, setPlaylistData] = useState<PlaylistType>();

  useEffect(() => {
    if (!spotifyApi.getAccessToken()) return;
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => setPlaylistData(data.body));
  }, [playlistId, spotifyApi]);

  if (!playlistData) return <h3>loading</h3>;

  return (
    <section className="relative flex flex-col gap-10 py-5 ">
      <PlaylistHeader playlist={playlistData} />
      <TrackList tracks={playlistData.tracks.items} />
    </section>
  );
};
export default Playlist;
