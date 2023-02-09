import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import { PlaylistType } from '.';

function PlaylistDescription({ playlist }: PlaylistType) {
  const { name, type, description, uri } = playlist;

  const playlistAcces = playlist.public ? 'Public' : 'Private';
  const playlistType = `${playlistAcces} ${type}`.toUpperCase();

  return (
    <div className="flex flex-col justify-evenly">
      <p className="text-2xl text-text-important bold">{playlistType}</p>
      <h1 className="text-7xl text-text-important font-bold">{name}</h1>
      <p className="">{description}</p>
      <p>{name}</p>
      <PlaylistPlaybackButton
        uri={uri}
        ariaLabel={`Play/pause ${name} playlist`}
        className={'w-fit'}
      />
    </div>
  );
}

export default PlaylistDescription;
