import { LikeButton } from '@components/Buttons';
import MoreOptionsButton from '@components/Buttons/DropdownButtons/MoreOptionsDropdown';
import PlaybackButton from '@components/Buttons/PlaybackButtons';
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
        className="dropdown-bottom dropdown-right"
        actions={<p>test</p>}
      />
    </section>
  );
}
export default PageActions;
