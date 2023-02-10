import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import UserIcon from '@components/User/UserAvatar';
import { PlaylistType } from '.';

function PlaylistDescription({ playlist }: PlaylistType) {
  const { name, type, description, uri, followers, owner } = playlist;

  const playlistAcces = playlist.public ? 'Public' : 'Private';
  const playlistType = `${playlistAcces} ${type}`.toUpperCase();

  return (
    <div className="flex flex-col justify-evenly">
      <p className="text-2xl font-bold text-text-important">{playlistType}</p>
      <h1 className="text-7xl font-bold text-text-important">{name}</h1>
      <p className="">{description}</p>
      <span className="flex">
        <UserIcon image={undefined} />
        <p>{followers.total}</p>
      </span>
      <PlaylistPlaybackButton
        uri={uri}
        ariaLabel={`Play/pause ${name} playlist`}
        className={'w-fit'}
      />
    </div>
  );
}

export default PlaylistDescription;
