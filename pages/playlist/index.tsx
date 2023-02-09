import { useEffect, useState } from 'react';
import PlaylistCard from '@components/Playlist/PlaylistCard';
import useSpotify from 'hooks/useSpotify';

type Playlist = SpotifyApi.PlaylistObjectSimplified;

const Playlist = () => {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    if (!spotifyApi.getAccessToken()) return;

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
          <PlaylistCard data={playlist} key={playlist.id} />
        ))}
      </div>
    </>
  );
};
export default Playlist;
