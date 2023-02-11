import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import UserAvatar from '@components/User/UserAvatar';
import { msToText } from '@utils/time';
import { PlaylistType } from '.';
import PlaylistCover from './PlaylistCover';

function PlaylistDescription({ playlist }: PlaylistType) {
  const {
    name,
    type,
    description,
    uri,
    followers,
    owner,
    tracks,
    collaborative,
    images,
  } = playlist;

  const playlistAcces = playlist.public ? 'Public' : 'Private';
  const playlistType = `${playlistAcces} ${type}`.toUpperCase();

  const playlistDuration = tracks.items.reduce((prevSum, currentElement) => {
    return (prevSum += currentElement.track?.duration_ms ?? 0);
  }, 0);

  const [image] = owner.images ?? [];
  console.log(owner);

  return (
    <div className="flex flex-col gap-4 p-2 text-text-important lg:flex-row">
      <picture className="lg:h-[30vh]">
        <PlaylistCover images={images} />
      </picture>

      <div>
        <span>
          <h1 className="sticky text-3xl font-bold lg:text-5xl ">{name}</h1>
          <p className="font-bold lg:text-2xl ">{playlistType}</p>
        </span>

        <p className="">{description}</p>

        <span className="flex">
          <UserAvatar imageURL={image?.url} />
          creators
        </span>

        <span className="flex gap-2 text-text">
          <p>{`${msToText(playlistDuration)} minutes`}</p>
          <span className="text-text-important">●</span>
          <p>{`${followers.total} likes`}</p>
        </span>

        <span>
          <PlaylistPlaybackButton
            uri={uri}
            ariaLabel={`Play/pause ${name} playlist`}
            className={'w-fit'}
          />
          playlist actions
        </span>
      </div>
    </div>
  );
}

export default PlaylistDescription;
