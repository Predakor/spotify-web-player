import useMergeSavedTracks from '@hooks/useMergedSavedTracks';
import { Track } from '.';
import TrackRow from './TrackRow';

function TrackList({ fetchedTracks }: { fetchedTracks: Track[] }) {
  const { ready, tracks } = useMergeSavedTracks(fetchedTracks);

  if (!ready) return <div>Loading</div>;
  return (
    <>
      {tracks.map((track, i) => (
        <TrackRow key={track.id} track={track} index={i} />
      ))}
    </>
  );
}
export default TrackList;
