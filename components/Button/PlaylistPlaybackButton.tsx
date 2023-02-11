import { useSelector } from 'react-redux';
import useSpotifyControls from '@hooks/useSpotifyControls';
import { selectDevices, selectActiveDevice } from '@store/devicesSlice';
import { selectPlaybackData } from '@store/playbackSlice';
import { PlaybackButton } from './PlaybackButtons';

interface Props {
  uri: string;
  ariaLabel: string;
  className?: string;
}
export default function PlaylistPlaybackButton(props: Props) {
  const { uri, className = '', ariaLabel } = props;

  const { playPlaylist } = useSpotifyControls();
  const { thisDevice } = useSelector(selectDevices);
  const activeDevice = useSelector(selectActiveDevice);

  const { context, is_playing = false } = useSelector(selectPlaybackData) || {};
  const playlistIsPlaying = !(context?.uri === uri && is_playing);

  const playHandler = async () => {
    try {
      const target = activeDevice?.is_active ? activeDevice.id : thisDevice;
      if (!target) console.error('error');
      await playPlaylist(uri, target);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaybackButton
      onClick={playHandler}
      isPlaying={playlistIsPlaying}
      className={`${className} bg-primary-600 text-6xl`}
      ariaLabel={ariaLabel}
      ariaPressed={playlistIsPlaying}
    />
  );
}
