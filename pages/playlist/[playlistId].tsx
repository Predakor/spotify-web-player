import Song from '@components/Song/Song';
import useSpotify from 'hooks/useSpotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

const Playlist = () => {
  const router = useRouter();
  const spotifyApi = useSpotify();
  const { playPlaylist } = useSpotifyControls();

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
    <div>
      <h2>{playlistData.name}</h2>
      <button onClick={() => playPlaylist(playlistData.uri)}>Play </button>

      <div>
        {playlistData.tracks.items.map(
          (track) =>
            track.track && <Song song={track.track} key={track.track.id} />
        )}
      </div>
    </div>
  );
};
export default Playlist;
