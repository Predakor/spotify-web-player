import PlaylistCard from '@components/Card/PlaylistCard';
import useSpotify from 'hooks/useSpotify';
import { useEffect, useState } from 'react';

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
    <div>
      <h1>This is playlists page</h1>
      <div>
        {playlists.map((playlist) => (
          <PlaylistCard data={playlist} key={playlist.id} />
        ))}
      </div>
    </div>
  );
};
export default Playlist;
