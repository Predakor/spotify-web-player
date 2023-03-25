import LikeIcon from '@icons/LikeIcon';
import Button, { ButtonProps } from '../Button';

interface Props extends ButtonProps {
  followed: boolean;
  target: string;
}
function FollowButton(props: Props) {
  const { followed, target } = props;
  return (
    <Button
      {...props}
      className={followed ? 'text-primary-content' : ''}
      aria-pressed={followed}
      aria-label={`Follow/Unfollow ${target}`}
    >
      <LikeIcon liked={followed} />
    </Button>
  );
}
export default FollowButton;
