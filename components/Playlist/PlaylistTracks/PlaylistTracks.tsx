import TrackList from './TrackList';
import TrackRowHeading from './TrackRowHeading';

export type Track = SpotifyApi.PlaylistTrackObject;
function PlaylistTracks({ tracks }: { tracks: Track[] }) {
  return (
    <div className="min-h-4/6 flex w-full flex-col gap-2 ">
      <TrackRowHeading />
      <TrackList fetchedTracks={tracks} />
    </div>
  );
}

export default PlaylistTracks;
