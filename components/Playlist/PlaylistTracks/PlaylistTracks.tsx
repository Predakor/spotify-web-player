import dynamic from 'next/dynamic';
import TrackRowHeading from './TrackRowHeading';

export type Track = SpotifyApi.PlaylistTrackObject;

const TrackList = dynamic(() => import('./TrackList'));
function PlaylistTracks({ tracks }: { tracks?: Track[] }) {
  return (
    <div className="relative flex-col gap-2">
      <TrackRowHeading />
      {tracks && <TrackList fetchedTracks={tracks} />}
    </div>
  );
}

export default PlaylistTracks;
