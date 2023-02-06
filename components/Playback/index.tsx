import CurrentSong from '@components/CurrentSong/CurrentSong';
import Devices from '@components/Devices/Devices';
import Controls from '@components/Playback/Controls';
import VolumeControl from '@components/Playback/VolumeControl/VolumeControl';
import ProgressBar from '@components/ProgressBar/ProgressBar';

function PlaybackPanel() {
  return (
    <div className="flex items-center gap-4 py-2 px-4">
      <div className="flex gap-4 w-1/5">
        <CurrentSong />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Controls />
        <ProgressBar />
      </div>
      <div className="flex items-center justify-end w-1/5">
        <Devices />
        <VolumeControl />
      </div>
    </div>
  );
}
export default PlaybackPanel;
