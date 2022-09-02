import spotifyApi from '@utils/spotify';
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

  const playId = playlistData?.uri;
  return (
    <div>
      <h2>{playlistData?.name}</h2>
      <button onClick={() => playSong(playId)}>Play </button>

      <div>
        {playlistData?.tracks.items.map((track) => {
          if (!track.track) return;
          const { id, name, artists, duration_ms, uri } = track.track;
          const playSong = () => {
            spotifyApi.play({ uris: [uri] });
          };
          return (
            <div
              className="flex gap-2 bg-gray-600 w-fit p-2"
              onClick={playSong}
              key={id}
            >
              <p>{name}</p>
              <p>{duration_ms / 1000}s</p>
              <p>{artists[0].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Playlist;
function playSong(uri: string): void {
  spotifyApi.play({ context_uri: uri });
}
