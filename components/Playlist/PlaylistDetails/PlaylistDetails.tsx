import Artists from '@components/Artists/Artists';
import TotalPlayTime from '@components/TotalPlayTime/TotalPlayTime';
import usePlaylistArtists from '@hooks/usePlaylistArtists';
import { PlaylistType } from '../PlaylistPanel';
import Author from './PlaylistAuthor';

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

  const playlistDuration = tracks.items.reduce(
    (sum, { track }) => (sum += track?.duration_ms ?? 0),
    0
  );

  return (
    <section
      className="bg flex flex-col items-stretch gap-4 text-base-content"
      aria-label="Playlist details"
    >
      <p className="font-bold lg:text-2xl">{playlistType}</p>
      <h1 className="font-bold md:text-4xl lg:text-6xl 2xl:text-8xl">{name}</h1>

      <p>{description}</p>

      <Artists
        className="text-text-important"
        artists={artists.map((artist) => artist.artist)}
      />

      <span className="flex items-center gap-2 ">
        <Author user={owner} />
        <span className="text-text-important">●</span>

        <TotalPlayTime timeMS={playlistDuration} />
        {followers.total > 0 && (
          <>
            <span className="text-text-important">●</span>
            <p>{`${followers.total} likes`}</p>
          </>
        )}
      </span>
    </section>
  );
}

export default PlaylistDescription;
