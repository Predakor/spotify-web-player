import dynamic from 'next/dynamic';
import TrackRowHeading from './TrackRowHeading';

export type Tracks = SpotifyApi.PlaylistTrackObject[];

const TrackList = dynamic(() => import('./TrackList'));
function PlaylistTracks({ tracks }: { tracks?: Tracks }) {
  if (!tracks) return <div>No Tracks yet</div>;

  const validTracks = tracks.filter((track) => track.track?.id);
  const fullTracks = validTracks.flatMap(({ track }) => {
    return track?.id ? track : [];
  });

  return (
    <section
      className="relative flex-col gap-2"
      aria-label="List of tracks on this playlist"
    >
      <TrackRowHeading />
      {tracks && <TrackList fetchedTracks={fullTracks} />}
    </section>
  );
}

export default PlaylistTracks;
