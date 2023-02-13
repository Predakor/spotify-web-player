import { useEffect, useState } from 'react';
import Artists from '@components/Artists/Artists';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import UserAvatar from '@components/User/UserAvatar';
import usePlaylistArtists from '@hooks/usePlaylistArtists';
import useSpotify from '@hooks/useSpotify';
import { msToStringValues, msToText } from '@utils/time';
import { PlaylistType } from '.';

function Author({ user }: { user: SpotifyApi.UserObjectPublic }) {
  const [pictureURL, setPictureURL] = useState('');
  const spotifyApi = useSpotify();
  useEffect(() => {
    spotifyApi.getUser(user.id).then((response) => {
      const images = response.body.images;
      if (images?.length) setPictureURL(images[0].url ?? '');
    });
  }, [user.id]);

  return (
    <span className="flex items-center gap-2">
      <UserAvatar imageURL={pictureURL} />
      <p>{user?.display_name ?? null}</p>
    </span>
  );
}

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
  } = playlist;

  const artists = usePlaylistArtists(playlist);
  const playlistAcces = playlist.public ? 'Public' : 'Private';
  const playlistType = `${playlistAcces} ${type}`.toUpperCase();

  const playlistDuration = () => {
    const duration = tracks.items.reduce((prevSum, currentElement) => {
      return (prevSum += currentElement.track?.duration_ms ?? 0);
    }, 0);
    const { hours, minutes } = msToStringValues(duration);
    if (!hours && !minutes) return null;
    const displayerHours = hours ? `${hours}hr` : '';
    const displayerMinutes = minutes ? `${minutes}min` : '';
    return `${displayerHours} ${displayerMinutes}`;
  };

  return (
    <div className="flex flex-col gap-4 text-text-important">
      <span>
        <h1 className="text-3xl font-bold lg:text-5xl ">{name}</h1>
        <p className="font-bold lg:text-2xl ">{playlistType}</p>
      </span>

      <p className="text-text">{description}</p>

      <span>
        <Artists
          className="text-text-important"
          artists={artists.map((artist) => artist.artist)}
        />
      </span>

      <Author user={owner} />

      <span className="flex gap-2 text-text">
        <p>{playlistDuration()}</p>
        {followers.total > 0 && (
          <>
            <span className="text-text-important">●</span>
            <p>{`${followers.total} likes`}</p>
          </>
        )}
      </span>

      <span>
        <PlaylistPlaybackButton
          uri={uri}
          ariaLabel={`Play/pause ${name} playlist`}
          className={'w-fit text-6xl'}
        />
        playlist actions
      </span>
    </div>
  );
}

export default PlaylistDescription;
