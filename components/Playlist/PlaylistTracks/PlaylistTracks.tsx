import { useEffect } from 'react';
import PagingObserver from '@components/Paging/PagingObserver';
import usePaging from '@hooks/paging';
import useSpotify from '@hooks/spotify/useSpotify';
import TrackRow from './TrackRow';
import TrackRowHeading from './TrackRowHeading';

interface Props {
  playlist: SpotifyApi.PlaylistObjectFull;
}

function PlaylistTracks({ playlist }: Props) {
  const spotifyApi = useSpotify();
  const [tracks, getMore] = usePaging(playlist.tracks, (options) =>
    spotifyApi.getPlaylistTracks(playlist.id, options)
  );

  if (!tracks) return <div>No Tracks yet</div>;
  return (
    <section
      className="relative flex-col gap-2"
      aria-label="List of tracks on this playlist"
    >
      <TrackRowHeading />
      {tracks.map(({ track }, i) => {
        if (!track) return;
        return (
          <TrackRow
            track={{ ...track, liked: false }}
            index={i}
            key={track.id}
          />
        );
      })}
      <PagingObserver onScroll={getMore} />
    </section>
  );
}

export default PlaylistTracks;
