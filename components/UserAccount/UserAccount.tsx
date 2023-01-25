import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import UserIcon from './UserIcon';

function UserAccount() {
  const { data: session } = useSession();
  const [expanded, setExpanded] = useState(false);

  if (!session?.user) return <></>;

  const { name, image } = session.user;

  const settings = () => console.warn('not implemented go to settings page');

  const profile = () => console.warn('not implemented go to profile page');

  const logOut = () => signOut();

  const handleDropdownMenu = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div
      className="hidden sticky sm:flex flex-col w-fit ml-auto bg-black rounded-full cursor-pointer"
      onClick={handleDropdownMenu}
    >
      <div className="flex items-center gap-2 p-1">
        <UserIcon image={image} />
        <span className=" font-semibold ">{name}</span>
        <div>{expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </div>

      {expanded && (
        <div className="absolute top-full w-full p-2 bg-black ">
          <p onClick={settings}>Settings</p>
          <p onClick={profile}>Profile</p>
          <p onClick={logOut}>Log Out</p>
        </div>
      )}
    </div>
  );
}
export default UserAccount;
