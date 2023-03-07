import Devices from '@components/Devices/Devices';
import Controls from '@components/Playback/Controls';
import VolumeControl from '@components/Playback/VolumeControl/VolumeControl';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import CurrentTrack from '@components/Track/CurrentTrack';

function PlaybackPanel() {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] items-center justify-items-center p-2">
      <div className="lg:col-start-1 lg:row-span-2">
        <CurrentTrack />
      </div>
      <Controls />
      <ProgressBar />
      <div className="flex lg:row-span-2">
        <Devices />
        <VolumeControl />
      </div>
    </div>
  );
}
export default PlaybackPanel;
