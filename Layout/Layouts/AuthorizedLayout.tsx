import { ReactNode } from 'react';
import useSpotifySDK from '@hooks/spotify/useSpotifySDK';
import { getLocalVolume } from '@utils/getLocalValue';
import spotifyApi from '@utils/spotify';
import Aside from 'Layout/Aside';
import Background from 'Layout/Background';
import Main from 'Layout/Main';
import { SpotifyUser } from 'types/spotifyUser';
import { Header, FoterWraper } from './Layout';

interface Props {
  user: SpotifyUser;
  children: ReactNode;
  extendedHeader?: ReactNode;
}

function AuthorizedLayout({ user, children, extendedHeader }: Props) {
  const player = useSpotifySDK({
    volume: 0.5,
    getToken: async () => spotifyApi.getAccessToken() || '',
  });

  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] lg:grid-cols-[auto,1fr]">
      <Background />
      <Aside />
      <Header user={user}>{extendedHeader}</Header>
      <Main>{children}</Main>
      <FoterWraper />
    </div>
  );
}
export default AuthorizedLayout;
