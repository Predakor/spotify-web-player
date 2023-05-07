import Album from '@components/Album/Album';
import MoreOptionsButton from '@components/Button/DropdownButtons/MoreOptionsDropdown';
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
      className={`tracksGrid group flex items-center gap-4 rounded p-2 duration-300 hover:bg-base-100`}
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
        className={`transition-opacity duration-100 focus:opacity-100 group-hover:opacity-100 md:order-3
        ${track.liked ? 'lg:opacity-100' : 'lg:opacity-0'}`}
        songID={track.id}
        isLiked={track.liked}
        ariaLabel={`Follow/Unfollow ${track.name} by ${track.artists[0].name}`}
      />
      <Album className="hidden hover:link md:order-2 md:block" album={album} />
      <p className="hidden md:order-4 md:block" aria-label="Song duration">
        {msToText(duration_ms)}
      </p>
      <MoreOptionsButton
        className="dropdown-top dropdown-left order-last transition-opacity duration-100 lg:opacity-0 lg:group-hover:opacity-100"
        actions={<p></p>}
      />
    </article>
  );
}

export default TrackRow;
