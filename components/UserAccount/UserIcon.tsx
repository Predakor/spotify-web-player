import Image from 'next/image';
import { MdOutlineAccountCircle } from 'react-icons/md';

interface UserIconProps {
  image: string | null | undefined;
}

function UserIcon({ image }: UserIconProps) {
  if (!image) return <MdOutlineAccountCircle />;

  return (
    <Image src={image} width={40} height={40} alt="user profile picture" />
  );
}
export default UserIcon;
