import Dropdown from '@components/Dropdown/Dropdown';
import Menu from '@components/Menu/Menu';
import { signOut } from 'next-auth/react';
import { SpotifyUser } from 'types/spotifyUser';
import UserAvatar from './UserAvatar';

function User({ user }: { user: SpotifyUser }) {
  const { name, image } = user;

  return (
    <article className="dropdown dropdown-bottom dropdown-end ml-auto hidden cursor-default items-center gap-2 rounded-full bg-neutral p-1 pr-3 text-lg md:flex">
      <UserAvatar imageURL={image} />
      <p className="font-semibold text-neutral-content">{name}</p>
      <Dropdown customParent>
        <Menu
          items={[
            { item: 'Account' },
            { item: 'Profile' },
            { item: 'Settings' },
            { item: '', title: true },
            { item: 'Log out', onClick: signOut },
          ]}
        />
      </Dropdown>
    </article>
  );
}
export default User;
