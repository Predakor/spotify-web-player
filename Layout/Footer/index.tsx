import { memo, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import useDeviceControls from '@hooks/spotify/controls/useDeviceControls';
import useSpotifyControls from '@hooks/spotify/controls/usePlaybackControls';
import useSpotifySDK from '@hooks/spotify/useSpotifySDK';
import spotifyApi from '@utils/spotify';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

function FoterWraper() {
  const player = useSpotifySDK({
    getToken: async () => spotifyApi.getAccessToken() || '',
    volume: 0.5,
  });
  const isMobile = useMediaQuery({ maxWidth: '1024px' });
  const { getCurrentPlayback } = useSpotifyControls();
  const { getDevices } = useDeviceControls();

  useEffect(() => {
    player?.connect();
  }, [player]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getCurrentPlayback();
        getDevices();
      } catch (error) {}
    };
    fetchData();
  }, [getCurrentPlayback, getDevices]);

  return isMobile ? <MobileFooter /> : <Footer />;
}
export default memo(FoterWraper);
