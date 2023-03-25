import Button from '@components/Button';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import LikeButton, {
  LikePlaylistButton,
} from '@components/Button/ToogleButtons/LikedButton';

interface Props {
  id: string;
  uri: string;
  name: string;
}

function PlaylistActions({ id, uri, name }: Props) {
  return (
    <>
      <PlaylistPlaybackButton
        uri={uri}
        ariaLabel={`Play/pause ${name} playlist`}
        className={'w-fit text-6xl'}
      />
      <LikePlaylistButton
        isLiked={false}
        ariaLabel={'Add/Remove from saved tracks '}
        playlistID={uri}
      />
    </>
  );
}
export default PlaylistActions;
