import Image from 'next/image';
import { MdOutlineAccountCircle } from 'react-icons/md';

interface UserIconProps {
  image: string | null | undefined;
  onClick?: VoidFunction;
}

function UserIcon({ image, onClick }: UserIconProps) {
  return !image ? (
    <MdOutlineAccountCircle onClick={onClick} />
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
