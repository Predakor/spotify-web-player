import { useDispatch } from 'react-redux';
import CurrentSong from '@components/CurrentSong/CurrentSong';
import Devices from '@components/Devices/Devices';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import Controls from '@components/WebPlayback/Controls';

function PlaybackPanel() {
  return (
    <div className="flex items-center gap-4 py-2 px-4">
      <div className="w-1/5">
        <CurrentSong />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Controls />
        <ProgressBar current={0} duration={0} onSongEnd={() => 1} />
      </div>
      <div className="flex items-center w-1/5">
        <Devices />
        <VolumeControl />
      </div>
    </div>
  );
}
export default PlaybackPanel;
