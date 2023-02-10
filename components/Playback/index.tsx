import Devices from '@components/Devices/Devices';
import Controls from '@components/Playback/Controls';
import VolumeControl from '@components/Playback/VolumeControl/VolumeControl';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import CurrentTrack from '@components/Track/CurrentTrack';

function PlaybackPanel() {
  return (
    <div className="flex items-center gap-4 py-2 px-4">
      <div className="flex w-1/5 gap-4">
        <CurrentTrack />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Controls />
        <ProgressBar />
      </div>
      <div className="flex w-1/5 items-center justify-end">
        <Devices />
        <VolumeControl />
      </div>
    </div>
  );
}
export default PlaybackPanel;
