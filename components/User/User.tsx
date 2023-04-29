import Dropdown from '@components/Dropdown/Dropdown';
import { signOut } from 'next-auth/react';
import { SpotifyUser } from 'types/spotifyUser';
import UserAvatar from './UserAvatar';

function User({ user }: { user: SpotifyUser }) {
  const { name, image } = user;

  return (
    <section className="dropdown-bottom dropdown-end dropdown ml-auto hidden items-center gap-2 rounded-full bg-background-200 p-0.5 text-xl md:flex">
      <UserAvatar imageURL={image} />
      <p className="font-semibold text-text-important">{name}</p>
      <Dropdown customParent>
        <ul className="bg-background-200 p-2 ">
          <li tabIndex={0}>Profile</li>
          <li tabIndex={0}>Settings</li>
          <li onClick={() => signOut()} tabIndex={0}>
            Log out
          </li>
        </ul>
      </Dropdown>
    </section>
  );
}
export default User;
