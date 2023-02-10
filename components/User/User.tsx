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
      className="sticky ml-auto hidden  flex-col rounded-full bg-background sm:flex"
      onClick={handleDropdownMenu}
    >
      <div className="relative flex items-center gap-2 p-2">
        <UserAvatar imageURL={image} />
        <p className="font-semibold text-text-important">{name}</p>
        <button>
          {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      <Dropdown expanded={expanded}>
        <UserDropdown />
      </Dropdown>
    </div>
  );
}
export default User;
