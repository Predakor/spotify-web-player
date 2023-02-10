import Devices from '@components/Devices/Devices';
import Controls from '@components/Playback/Controls';
import VolumeControl from '@components/Playback/VolumeControl/VolumeControl';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import CurrentTrack from '@components/Track/CurrentTrack';

function PlaybackPanel() {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] p-2">
      <div className="flex gap-4">
        <CurrentTrack />
      </div>
      <div className="">
        <Controls />
        <ProgressBar />
      </div>
      <div className="">
        <Devices />
        <VolumeControl />
      </div>
    </div>
  );
}
export default PlaybackPanel;
