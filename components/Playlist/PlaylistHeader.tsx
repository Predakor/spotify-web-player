import { useSelector } from 'react-redux';
import PlaylistPlaybackButton from '@components/Buttons/PlaybackButtons/PlaylistPlaybackButton';
import { usePlaylistInfo } from '@hooks/spotify/Info';
import { selectInView } from '@store/scrollSlice';

function PlaylistHeader() {
  const [playlistData] = usePlaylistInfo();
  const inView = useSelector(selectInView);

  if (!playlistData.value) return null;

  const { name, uri } = playlistData.value;
  const showHeader = inView ? 'opacity-0' : 'opacity-100';
  return (
    <div
      className={`flex items-center gap-4 text-2xl ${showHeader} duration-150 `}
    >
      <PlaylistPlaybackButton
        uri={uri}
        ariaLabel={`Play/pause ${name} playlist`}
        className={'text-4xl shadow-2xl shadow-black'}
      />
      <h1>{name}</h1>
    </div>
  );
}
export default PlaylistHeader;
