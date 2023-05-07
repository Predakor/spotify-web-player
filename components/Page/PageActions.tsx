import { LikeButton } from '@components/Button';
import MoreOptionsButton from '@components/Button/DropdownButtons/MoreOptionsDropdown';
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
      <PlaybackButton
        className="btn-primary btn-circle btn-lg ease-in hover:scale-110"
        onClick={() => playPlaylist(uri)}
      />
      <LikeButton
        className="text-2xl"
        onClick={() => 1}
        isLiked={false}
        ariaLabel={''}
      />
      <MoreOptionsButton
        className="dropdown-right dropdown-bottom"
        actions={<p>test</p>}
      />
    </section>
  );
}
export default PageActions;
