import CurrentSong from '@components/CurrentSong/CurrentSong';
import { selectInView } from '@store/scrollSlice';
import { msToText } from '@utils/time';
import { useSelector } from 'react-redux';

interface TrackListProps {
  tracks: SpotifyApi.PlaylistTrackObject[];
}

function TrackList({ tracks }: TrackListProps) {
  const inView = useSelector(selectInView);
  const gridClasses = 'grid grid-cols-[3ch,2fr,1fr,5ch] items-center gap-5 p-2';

  return (
    <div className="relative flex flex-col gap-2 w-full min-h-4/6">
      <div
        className={`${gridClasses} sticky top-20 z-10 text-secondary-400 ${
          inView ? '' : 'bg-black transition-colors'
        }`}
      >
        <span>#</span>
        <span>Track</span>
        <span>Album</span>
        <span>3:33</span>
      </div>
      <hr />

      {tracks.map((song, i) => {
        if (!song.track) return null;
        const { id, duration_ms, album } = song.track;

        return (
          <div
            className={`${gridClasses} hover:bg-secondary-700 hover:bg-opacity-60 hover:cursor-pointer transition-colors`}
            key={id}
          >
            <p>{i + 1}</p>
            <CurrentSong songInfo={song.track} />
            <p>{album.name}</p>
            <p>{msToText(duration_ms)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TrackList;
