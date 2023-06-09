import useSpotifySDK from '@hooks/spotify/useSpotifySDK';
import Aside from '@layout/Aside';
import DynamicBackground from '@layout/DynamicBackground';
import Main from '@layout/Main';
import spotifyApi from '@utils/spotify';
import { ReactNode } from 'react';
import { FoterWraper, Header } from './Layout';

interface Props {
  children: ReactNode;
  extendedHeader?: ReactNode;
}

function AuthorizedLayout({ children, extendedHeader }: Props) {
  //check if user is premium && dont load sdk if he's not
  const player = useSpotifySDK({
    volume: 0.5,
    getToken: async () => spotifyApi.getAccessToken() || '',
  });

  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] lg:grid-cols-[auto,1fr]">
      <DynamicBackground />
      <Aside />
      <Header>{extendedHeader}</Header>
      <Main>{children}</Main>
      <FoterWraper />
    </div>
  );
}
export default AuthorizedLayout;
