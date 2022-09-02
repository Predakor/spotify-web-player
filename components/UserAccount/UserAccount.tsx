import { useSession } from 'next-auth/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import UserIcon from './UserIcon';

function UserAccount() {
  const { data: session } = useSession();
  if (!session?.user) return <></>;

  const { name, image } = session.user;

  return (
    <div className="flex items-center gap-1 ml-auto rounded-xl px-3">
      <UserIcon image={image} />
      <span>{name}</span>
      <MdKeyboardArrowDown />
    </div>
  );
}
export default UserAccount;
