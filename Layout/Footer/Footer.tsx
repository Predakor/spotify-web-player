import Devices from '@components/Devices/Devices';
import Controls from '@components/Playback/Controls';
import VolumeControl from '@components/Playback/VolumeControl/VolumeControl';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import CurrentTrack from '@components/Track/CurrentTrack';
import ActiveDevice from './ActiveDevice';

function Footer() {
  return (
    <footer className="sticky bottom-0 col-span-full border-t border-secondary-800 bg-base-100 p-2">
      <div className="grid grid-cols-3 items-center justify-items-center">
        <section className="justify-self-start" aria-label="Currently playing">
          <CurrentTrack />
        </section>
        <section
          className="flex w-full flex-col items-center"
          aria-label="Playback controls"
        >
          <Controls />
          <ProgressBar />
        </section>
        <section
          className="flex justify-self-end"
          aria-label="Volume and device controls"
        >
          <Devices />
          <VolumeControl />
        </section>
      </div>
      <ActiveDevice />
    </footer>
  );
}

export default Footer;
