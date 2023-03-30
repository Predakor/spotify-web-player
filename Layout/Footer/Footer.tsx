import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import useDeviceControls from '@hooks/spotify/controls/useDeviceControls';
import useSpotifyControls from '@hooks/spotify/controls/usePlaybackControls';
import { selectPlaybackData } from '@store/playbackSlice';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: '1024px' });
  const { getCurrentPlayback } = useSpotifyControls();
  const { getDevices } = useDeviceControls();

  const playback = useSelector(selectPlaybackData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getCurrentPlayback();
        getDevices();
      } catch (error) {}
    };
    fetchData();
  }, []);

  if (!playback) return null;

  return isMobile ? <MobileFooter /> : <DesktopFooter playback={playback} />;
}
export default memo(Footer);
