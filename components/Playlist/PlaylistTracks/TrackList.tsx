import useMergeSavedTracks from '@hooks/spotify/useMergedSavedTracks';
import { Track } from 'types/spotifyTypes';
import TrackRow from './TrackRow';

function TrackList({ fetchedTracks }: { fetchedTracks: Track[] }) {
  const { ready, tracks } = useMergeSavedTracks(fetchedTracks);

  if (!ready) {
    return (
      <div className="rounde flex animate-pulse flex-col gap-2 opacity-80">
        <div className="h-16 bg-background-300" />
        <div className="h-16 bg-background-300" />
        <div className="h-16 bg-background-300" />
        <div className="h-16 bg-background-300" />
        <div className="h-16 bg-background-300" />
      </div>
    );
  }

  return (
    <>
      {tracks.map((track, i) => (
        <TrackRow key={track.id} track={track} index={i} />
      ))}
    </>
  );
}
export default TrackList;
