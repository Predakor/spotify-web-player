import { useState } from 'react';
import useSpotify from '@hooks/useSpotify';
import useTrackControls from '@hooks/useTrackControls';
import LikeIcon from '@icons/LikeIcon';

interface LikeButtonProps {
  className?: string;
  isLiked: boolean;
  onClick?: () => void;
  ariaLabel: string;
}

function LikeButton(props: LikeButtonProps) {
  const { onClick, isLiked, className, ariaLabel } = props;
  const active = isLiked ? 'text-primary-500' : 'text-text';
  return (
    <button
      type="button"
      className={`button ${active} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={isLiked}
    >
      <LikeIcon liked={isLiked} />
    </button>
  );
}

function LikeTrackButton(props: LikeButtonProps & { songID: string }) {
  const { songID, isLiked, className } = props;
  const [liked, setLiked] = useState(isLiked ?? false);
  const { toogleLikeState } = useTrackControls();

  const clickHandler = async () => {
    try {
      const result = await toogleLikeState([songID], liked);
      setLiked(result);
    } catch (error) {}
  };
  return (
    <LikeButton
      onClick={clickHandler}
      isLiked={liked}
      className={className}
      ariaLabel={'Like/dislike song'}
    />
  );
}

function LikePlaylistButton(props: LikeButtonProps & { playlistID: string }) {
  const { playlistID, isLiked = false, className } = props;
  const [liked, setLiked] = useState(isLiked ?? false);
  const spotifyApi = useSpotify();

  const clickHandler = async () => {
    try {
      const result = liked
        ? spotifyApi.unfollowPlaylist(playlistID)
        : spotifyApi.followPlaylist(playlistID);
      await result;
      if ((await result).statusCode === 200) setLiked((prev) => !prev);
    } catch (error) {}
  };
  return (
    <LikeButton
      onClick={clickHandler}
      isLiked={isLiked ?? false}
      className={className}
      ariaLabel={'Like/Dislike playlist'}
    />
  );
}
export { LikeTrackButton, LikePlaylistButton };
export default LikeButton;
