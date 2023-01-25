import Image from 'next/image';
import { AccountIcons } from '@icons/index';

interface UserIconProps {
  image: string | null | undefined;
  onClick?: VoidFunction;
}

function UserIcon({ image, onClick }: UserIconProps) {
  return !image ? (
    <AccountIcons.MdOutlineAccountCircle onClick={onClick} />
  ) : (
    <Image
      className="rounded-full"
      src={image}
      width={40}
      height={40}
      alt="user profile picture"
      onClick={onClick}
    />
  );
}
export default UserIcon;
