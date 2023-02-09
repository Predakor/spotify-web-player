import TrackList from './TrackList';
import TrackRowHeading from './TrackRowHeading';

const gridClasses = 'grid grid-cols-[3ch,2fr,1fr,5ch] items-center gap-5 p-2';

export type Track = SpotifyApi.PlaylistTrackObject;
function PlaylistTracks({ tracks }: { tracks: Track[] }) {
  return (
    <div className="flex flex-col gap-2 w-full min-h-4/6 ">
      <TrackRowHeading />
      <TrackList fetchedTracks={tracks} />
    </div>
  );
}

export default PlaylistTracks;
