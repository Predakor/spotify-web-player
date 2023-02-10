import { AccountIcons } from '@icons/index';
import Image from 'next/image';

interface UserIconProps {
  imageURL?: string | null | undefined;
  onClick?: VoidFunction;
}

function UserAvatar({ imageURL, onClick }: UserIconProps) {
  if (!imageURL)
    return <AccountIcons.MdOutlineAccountCircle onClick={onClick} />;

  return (
    <Image
      className="rounded-full"
      src={imageURL}
      width={40}
      height={40}
      alt="user profile picture"
    />
  );
}
export default UserAvatar;
