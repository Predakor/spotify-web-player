import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import VolumeControl from '@components/VolumeControl/VolumeControl';

function Footer() {
  return (
    <footer className="flex items-center justify-between p-2 px-5">
      <CurrentSong />
      <Player />
      <VolumeControl />
    </footer>
  );
}
export default Footer;
