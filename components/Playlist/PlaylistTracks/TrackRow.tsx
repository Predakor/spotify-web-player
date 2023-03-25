import { LikeTrackButton } from '@components/Button/ToogleButtons/LikedButton';
import Track from '@components/Track/Track';
import { msToText } from '@utils/time';
import { LikedTrack } from 'types/spotifyTypes';

interface TrackRowProps {
  track: LikedTrack;
  index: number;
}
function TrackRow({ track, index }: TrackRowProps) {
  const { duration_ms, album } = track;

  return (
    <article
      className={`tracksGrid group card  items-center gap-4 rounded p-2`}
      aria-label={track.name}
    >
      <p
        className="hidden text-xl font-bold md:block md:justify-self-end"
        aria-hidden="true"
      >
        {index + 1}
      </p>
      <Track track={track} />
      <LikeTrackButton
        className={`transition-opacity duration-100 group-hover:opacity-100 md:order-3
        ${track.liked ? 'lg:opacity-100' : 'lg:opacity-0'}`}
        songID={track.id}
        isLiked={track.liked}
        ariaLabel={'Follow/Unfollow track'}
      />
      <p className="hidden md:order-2 md:block" aria-label="Album name">
        {album.name}
      </p>
      <p className="hidden md:order-4 md:block" aria-label="Song duration">
        {msToText(duration_ms)}
      </p>
      <button
        className="order-last transition-opacity duration-100 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="More actions"
      ></button>
    </article>
  );
}

export default TrackRow;
