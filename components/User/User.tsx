import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Dropdown from '@components/Dropdown/Dropdown';
import { SpotifyUser } from 'types/spotifyUser';
import UserAvatar from './UserAvatar';
import UserDropdown from './UserDropdown';

function User({ user }: { user: SpotifyUser }) {
  const { name, image } = user;
  const [expanded, setExpanded] = useState(false);

  const handleDropdownMenu = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div
      className="ml-auto flex-col rounded-full bg-background sm:flex"
      onClick={handleDropdownMenu}
    >
      <div className="relative flex items-center gap-2 p-1">
        <UserAvatar imageURL={image} />
        <span className="hidden md:flex md:gap-2 md:pr-2">
          <p className="font-semibold text-text-important">{name}</p>
          <button>
            {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </span>
      </div>
      <Dropdown expanded={expanded}>
        <UserDropdown />
      </Dropdown>
    </div>
  );
}
export default User;
