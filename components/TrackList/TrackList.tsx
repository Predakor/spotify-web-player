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
    <div className="flex flex-col gap-2 w-full min-h-4/6 ">
      <div
        className={`${gridClasses} sticky top-20 mx-5 border-b border-secondary-500 
        ${inView ? 'pr-0' : 'bg-black mx-0 px-5'}
        text-secondary-400 z-10`}
      >
        <span className="justify-self-end font-bold text-xl">#</span>
        <span>Track</span>
        <span>Album</span>
        <span className="justify-self-end">3:33</span>
      </div>

      {tracks.map((song, i) => {
        if (!song.track) return null;
        const { id, duration_ms, album } = song.track;

        return (
          <div
            className={`${gridClasses} px-5 text-secondary-400 hover:bg-secondary-700 hover:bg-opacity-60 hover:cursor-pointer transition-colors`}
            key={id}
          >
            <p className="justify-self-end font-bold text-xl">{i + 1}</p>
            <CurrentSong songInfo={song.track} />
            <p>{album.name}</p>
            <p className="justify-self-end">{msToText(duration_ms)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TrackList;
