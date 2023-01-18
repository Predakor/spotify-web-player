import spotifyApi from '@utils/spotify';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { SpotifySession } from 'types/spotifyUser';

export default function useSpotify() {
  const { data } = useSession();
  const session = data as SpotifySession;

  useEffect(() => {
    if (!session) return;

    if (session.error === 'AccesTokenExpired') spotifyApi.refreshAccessToken();
    if (session.error === 'RefreshAccesTokenError') signIn();

    spotifyApi.setAccessToken(session.user.accesToken);
  }, [session]);
  return spotifyApi;
}
