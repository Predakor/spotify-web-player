import dynamic from 'next/dynamic';
import TrackRowHeading from './TrackRowHeading';

export type Track = SpotifyApi.PlaylistTrackObject;

const TrackList = dynamic(() => import('./TrackList'));
function PlaylistTracks({ tracks }: { tracks?: Track[] }) {
  return (
    <section
      className="relative flex-col gap-2"
      aria-label="List of tracks on this playlist"
    >
      <TrackRowHeading />
      {tracks && <TrackList fetchedTracks={tracks} />}
    </section>
  );
}

export default PlaylistTracks;
