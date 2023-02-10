import { lazy } from 'react';
import TrackRowHeading from './TrackRowHeading';

export type Track = SpotifyApi.PlaylistTrackObject;

const TrackList = lazy(() => import('./TrackList'));
function PlaylistTracks({ tracks }: { tracks: Track[] }) {
  if (!tracks.length) {
    return <div>Nothing yet add some tracks</div>;
  }

  return (
    <div className="min-h-4/6 flex w-full flex-col gap-2 ">
      <TrackRowHeading />

      <TrackList fetchedTracks={tracks} />
    </div>
  );
}

export default PlaylistTracks;
