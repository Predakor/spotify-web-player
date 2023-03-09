import { useSelector } from 'react-redux';
import { LikeTrackButton } from '@components/Button/LikedButton';
import { PlaybackButton } from '@components/Button/PlaybackButtons';
import Devices from '@components/Devices/Devices';
import Track from '@components/Track/Track';
import { usePlaybackControls } from '@hooks/spotify/controls';
import { MobileNav } from '@layout/Nav';
import { selectPlaybackData, selectTrack } from '@store/playbackSlice';
import { useRouter } from 'next/router';
import { Track as TrackType } from 'types/spotifyTypes';

function MobileFooter() {
  const { asPath } = useRouter();
  const currentTrack = useSelector(selectTrack);
  const { tooglePlayBack } = usePlaybackControls();
  const { is_playing, item } = useSelector(selectPlaybackData) ?? {};

  return (
    <footer className="sticky bottom-0">
      <div className="m-2 flex items-center rounded-md bg-base-100 p-2">
        <div className="flex-1">
          {currentTrack && <Track track={currentTrack as TrackType} />}
        </div>

        <Devices />

        {item && (
          <LikeTrackButton
            songID={item.id}
            isLiked={false}
            ariaLabel={`Follow/Unfollow ${item.name}`}
          />
        )}

        <PlaybackButton
          className="text-base-content"
          onClick={tooglePlayBack}
          isPlaying={!is_playing}
        />
      </div>
      <MobileNav pathname={asPath} />
    </footer>
  );
}
export default MobileFooter;
