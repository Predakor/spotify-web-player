import { useEffect, useState } from 'react';
import PlaylistCard from '@components/Card/PlaylistCard';
import useSpotify from '@hooks/spotify/useSpotify';
import { useRouter } from 'next/router';

type Playlist = SpotifyApi.PlaylistObjectSimplified;

const Playlist = () => {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const { push } = useRouter();

  useEffect(() => {
    spotifyApi.getUserPlaylists().then((data) => {
      try {
        setPlaylists(data.body.items);
      } catch (error) {
        console.error(error);
      }
    });
  }, [spotifyApi]);

  return (
    <>
      <h1>Playlists</h1>
      <div>
        {playlists.map((playlist) => (
          <PlaylistCard
            data={playlist}
            key={playlist.id}
            onClick={() => push(`/playlist/${playlist.id}`)}
          />
        ))}
      </div>
    </>
  );
};
export default Playlist;
