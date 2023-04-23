import { useSelector } from 'react-redux';
import PlaybackButton from '@components/Button/PlaybackButtons';
import { LikeTrackButton } from '@components/Button/ToogleButtons/LikedButton';
import Devices from '@components/Devices/DevicesDropdown';
import Track from '@components/Track/Track';
import { usePlaybackControls } from '@hooks/spotify/controls';
import { selectPlaybackData, selectTrack } from '@store/playbackSlice';
import { idToHsl } from '@utils/idToColor';
import { MobileNav } from 'Layout/Nav';
import { useRouter } from 'next/router';
import { Track as TrackType } from 'types/spotifyTypes';

function MobileFooter() {
  const { asPath, query } = useRouter();
  const { tooglePlayBack } = usePlaybackControls();
  const { is_playing, item } = useSelector(selectPlaybackData) ?? {};
  const currentTrack = useSelector(selectTrack);

  const [id] = Object.values(query);
  let backgroundColor = 'bg-background-200';

  if (id && asPath !== '/search') {
    const [h, s, l] = idToHsl(id.toString());
    const hsl = `${h},${s}%,${l}%`;
    backgroundColor = `hsl(${hsl})`;
  }

  return (
    <footer className="sticky bottom-0">
      <div
        className="m-2 flex items-center rounded-md p-2"
        style={{ backgroundColor }}
      >
        <div className="truncate">
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
