import { useEffect, useState } from 'react';
import useTrackControls from '@hooks/useTrackControls';
import LikeIcon from '@icons/LikeIcon';
import Button, { ButtonProps } from '.';

interface LikeButtonProps {
  songId: string;
  _liked?: boolean;
}

function LikeButton({ songId, _liked = false }: LikeButtonProps) {
  const [liked, setLiked] = useState(_liked);

  const { checkIFLiked, toogleLikeState } = useTrackControls();

  const clickHandler = async () => {
    try {
      const result = await toogleLikeState([songId], liked);
      setLiked(result);
    } catch (error) {}
  };
  const active = liked ? 'text-primary-500' : '';
  return (
    <Button
      className={`${active}`}
      onClick={clickHandler}
      ariaLabel="Like/Dislike song"
      ariaPressed={liked}
    >
      <LikeIcon liked={liked} />
    </Button>
  );
}
export default LikeButton;
