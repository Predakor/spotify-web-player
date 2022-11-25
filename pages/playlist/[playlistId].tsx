import PlaylistHeader from '@components/PlaylistHeader/PlaylistHeader';
import TrackList from '@components/TrackList/TrackList';
import useSpotify from 'hooks/useSpotify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    <section className="flex flex-col gap-10 p-5 ">
      <span className="absolute left-0 top-0 h-4/5 w-full bg-gradient-to-b from-primary-100 to-black -z-10" />
      <PlaylistHeader playlist={playlistData} />
      <TrackList tracks={playlistData.tracks.items} />
    </section>
  );
};
export default Playlist;
