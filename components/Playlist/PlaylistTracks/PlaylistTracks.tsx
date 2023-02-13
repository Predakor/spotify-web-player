import dynamic from 'next/dynamic';
import TrackRowHeading from './TrackRowHeading';

export type Track = SpotifyApi.PlaylistTrackObject;

const TrackList = dynamic(() => import('./TrackList'));
function PlaylistTracks({ tracks }: { tracks: Track[] }) {
  if (!tracks.length) {
    return <div>Nothing yet add some tracks</div>;
  }

  return (
    <div className="relative top-0 h-screen flex-col gap-2 ">
      <TrackRowHeading />
      <TrackList fetchedTracks={tracks} />
    </div>
  );
}

export default PlaylistTracks;
