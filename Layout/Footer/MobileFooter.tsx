import PlaybackButton from '@components/Buttons/PlaybackButtons';
import { LikeTrackButton } from '@components/Buttons/ToogleButtons/LikedButton';
import Devices from '@components/Devices/DevicesDropdown';
import Track from '@components/Track/Track';
import { usePlaybackControls } from '@hooks/spotify/controls';
import usePageColor from '@hooks/usePageColor';
import { selectPlaybackData, selectTrack } from '@store/playbackSlice';
import { MobileNav } from 'Layout/Nav';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Track as TrackType } from 'types/spotifyTypes';

function MobileFooter() {
  const { asPath } = useRouter();
  const currentTrack = useSelector(selectTrack);
  const { is_playing, item } = useSelector(selectPlaybackData) ?? {};

  const { tooglePlayBack } = usePlaybackControls();
  const backgroundColor =
    usePageColor({ id: item?.id, lightness: 25 }) ?? 'black';

  return (
    <footer className="sticky bottom-0 w-full">
      {item && (
        <article
          className="m-2 flex items-center rounded p-2"
          style={{ backgroundColor }}
        >
          <div className="flex-1 truncate pr-2">
            {currentTrack && <Track track={currentTrack as TrackType} />}
          </div>

          <div className="inline-flex gap-4">
            <Devices />

            <LikeTrackButton
              className="w-fit p-0 text-3xl"
              songID={item.id}
              isLiked={false}
              ariaLabel={`Follow/Unfollow ${item.name}`}
            />

            <PlaybackButton
              className="w-fit bg-transparent text-neutral-content "
              onClick={tooglePlayBack}
              isPlaying={!is_playing}
            />
          </div>
        </article>
      )}
      <MobileNav pathname={asPath} />
    </footer>
  );
}
export default MobileFooter;
