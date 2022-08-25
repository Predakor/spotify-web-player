import PlaylistCard from '@components/Card/PlaylistCard';
import useSpotify from 'hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function Playlist() {
  const session = useSession();
  const spotifyApi = useSpotify();

  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);

  useEffect(() => {
    if (!spotifyApi.getAccessToken()) return;
    spotifyApi.getUserPlaylists().then((data) => {
      setPlaylists(data.body.items);
    });
  }, [session, spotifyApi]);

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
}
export default Playlist;
