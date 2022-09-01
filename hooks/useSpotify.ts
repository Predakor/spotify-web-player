import spotifyApi from '@utils/spotify';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { SpotifySession } from 'types/spotifyUser';

export default function useSpotify() {
  const { data } = useSession();
  const session = data as SpotifySession;

  useEffect(() => {
    if (!session) return;

    if (session.error === 'RefreshAccesTokenError') signIn();

    spotifyApi.setAccessToken(session.user.accesToken);
  }, [session]);
  return spotifyApi;
}

export const nextSong = () => spotifyApi.skipToNext();
export const prevSong = () => spotifyApi.skipToPrevious();
export const toogleShugle = () => spotifyApi.setShuffle(true);
export const repeatSong = async () => {
  const data = (await spotifyApi.getMyCurrentPlaybackState()).body;

  if (data.repeat_state === 'context') return spotifyApi.setRepeat('track');
  if (data.repeat_state === 'track') return spotifyApi.setRepeat('context');

  return spotifyApi.setRepeat('off');
};
