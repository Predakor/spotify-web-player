import { useState } from 'react';
import useTrackControls from '@hooks/useTrackControls';
import LikeIcon from '@icons/LikeIcon';
import Button from '.';

interface LikeButtonProps {
  className?: string;
  songId: string;
  isLiked?: boolean;
}

function LikeButton(props: LikeButtonProps) {
  const { songId, isLiked = false, className } = props;
  const [liked, setLiked] = useState(isLiked);

  const { toogleLikeState } = useTrackControls();

  const clickHandler = async () => {
    try {
      const result = await toogleLikeState([songId], liked);
      setLiked(result);
    } catch (error) {}
  };
  const active = liked ? 'text-primary-500' : 'text-text';
  return (
    <Button
      {...props}
      className={`${active} ${className}`}
      onClick={clickHandler}
      ariaLabel="Like/Dislike song"
      ariaPressed={liked}
    >
      <LikeIcon liked={liked} />
    </Button>
  );
}
export default LikeButton;
