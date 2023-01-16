import CurrentSong from '@components/CurrentSong/CurrentSong';
import { selectInView } from '@store/scrollSlice';
import { msToText } from '@utils/time';
import { useSelector } from 'react-redux';
import useSpotifyControls from '@hooks/useSpotifyControls';

interface TrackListProps {
  tracks: SpotifyApi.PlaylistTrackObject[];
}
interface TrackRowProps {
  track: SpotifyApi.TrackObjectFull;
  index: number;
}

const gridClasses = 'grid grid-cols-[3ch,2fr,1fr,5ch] items-center gap-5 p-2';

function TrackRow({ track, index }: TrackRowProps) {
  const { id, duration_ms, album, uri } = track;
  const { playSong } = useSpotifyControls();

  const clickHandler = () => playSong(uri, id);

  return (
    <div
      className={`${gridClasses} px-5 text-secondary-400 hover:bg-secondary-700 hover:bg-opacity-60 hover:cursor-pointer transition-colors`}
      onClick={clickHandler}
    >
      <p className="justify-self-end font-bold text-xl">{index + 1}</p>
      <CurrentSong songInfo={track as unknown as Spotify.Track} />
      <p>{album.name}</p>
      <p className="justify-self-end">{msToText(duration_ms)}</p>
    </div>
  );
}

function TrackList({ tracks }: TrackListProps) {
  const inView = useSelector(selectInView);

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

      {tracks.map(({ track }, i) => {
        if (!track) return null;
        return <TrackRow key={track.id} track={track} index={i}></TrackRow>;
      })}
    </div>
  );
}

export default TrackList;
