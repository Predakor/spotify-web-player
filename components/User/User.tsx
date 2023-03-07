import { useState } from 'react';
import DropdownButton from '@components/Button/DropdownButton';
import { SpotifyUser } from 'types/spotifyUser';
import UserAvatar from './UserAvatar';
import UserDropdown from './UserDropdown';

function User({ user }: { user: SpotifyUser }) {
  const { name, image } = user;
  const [expanded, setExpanded] = useState(false);

  const toogleDropdown = () => setExpanded((prevState) => !prevState);

  return (
    <div
      className={
        'dropdown dropdown-end dropdown-bottom ml-auto hidden md:block'
      }
    >
      <div className="flex items-center gap-2 rounded-full bg-background-200 py-1 px-2 text-xl">
        <UserAvatar imageURL={image} />
        <p className="font-semibold text-text-important">{name}</p>
        <DropdownButton onClick={toogleDropdown} expanded={expanded} />
        <UserDropdown />
      </div>
    </div>
  );
}
export default User;
