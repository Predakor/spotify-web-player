import Devices from '@components/Devices/DevicesDropdown';
import Notifications from '@components/Notifications/Notification';
import Controls from '@components/Playback/Controls';
import PlaybackProgress from '@components/Playback/PlaybackProgress';
import CurrentTrack from '@components/Track/CurrentTrack';
import Volume from '@components/Volume/Volume';
import ActiveDevice from './ActiveDevice';

interface Props {
  playback: SpotifyApi.CurrentPlaybackResponse | undefined | null;
}

function Footer({ playback }: Props) {
  const { actions, item, device, progress_ms, is_playing } = playback || {};
  const interrupting_playback =
    actions?.disallows?.interrupting_playback ?? true;

  return (
    <footer className="sticky bottom-0 col-span-full border-t border-base-300 bg-base-100 p-2">
      <div className="grid grid-cols-3 items-center justify-items-center">
        <Notifications className="mb-24" />

        <section className="justify-self-start" aria-label="Currently playing">
          {item && <CurrentTrack />}
        </section>

        <section
          className="flex w-full flex-col items-center"
          aria-label="Playback controls"
        >
          <Controls />
          <PlaybackProgress
            start={progress_ms}
            end={item?.duration_ms || 0}
            disabled={interrupting_playback ?? false}
            paused={!is_playing}
          />
        </section>

        <section
          className="flex justify-self-end"
          aria-label="Volume and device controls"
        >
          <Devices />
          {device && <Volume device={device} />}
        </section>
      </div>
      <ActiveDevice />
    </footer>
  );
}

export default Footer;
