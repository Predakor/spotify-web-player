import { useEffect } from 'react';
import spotifyApi from '@utils/spotify';
import { signIn, useSession } from 'next-auth/react';
import { SpotifySession } from 'types/spotifyUser';

export default function useSpotify() {
  const { data } = useSession();
  const session = data as SpotifySession;

  useEffect(() => {
    if (!session) return;

    if (session.error === 'RefreshAccesTokenError') signIn();

    spotifyApi.setAccessToken(session.user.accesToken);
    spotifyApi.setRefreshToken(session.user.accesToken);
  }, [session]);
  return spotifyApi;
}
