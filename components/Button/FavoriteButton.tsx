import LikeIcon from '@icons/LikeIcon';
import Button, { ButtonProps } from '.';

export interface LikeButtonProps extends ButtonProps {
  liked: boolean;
}

function LikeButton({ onClick, liked }: LikeButtonProps) {
  return (
    <Button onClick={onClick} ariaLabel="Like/Dislike song" ariaPressed={liked}>
      <LikeIcon liked={liked} />
    </Button>
  );
}
export default LikeButton;
