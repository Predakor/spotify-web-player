import { LikeButton } from '@components/Button';
import MoreOptionsButton from '@components/Button/DropdownButtons/MoreOptionsButton';
import PlaybackButton from '@components/Button/PlaybackButtons';
import { usePlaybackControls } from '@hooks/spotify/controls';

interface Props {
  uri: string;
  actions: 'play' | 'save';
  moreActions: string[];
}

function PageActions({ uri, actions, moreActions }: Props) {
  const { playPlaylist } = usePlaybackControls();
  return (
    <section
      className="flex items-center gap-4 p-4"
      aria-label="Actions for this page"
    >
      <PlaybackButton onClick={() => playPlaylist(uri)} />
      <LikeButton onClick={() => 1} isLiked={false} ariaLabel={''} />
      <MoreOptionsButton actions={<p>test</p>} />
    </section>
  );
}
export default PageActions;
