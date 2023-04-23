import Dropdown from '@components/Dropdown/Dropdown';
import { SpotifyUser } from 'types/spotifyUser';
import UserAvatar from './UserAvatar';

function User({ user }: { user: SpotifyUser }) {
  const { name, image } = user;

  return (
    <section className="dropdown-end dropdown dropdown-bottom ml-auto flex items-center gap-2 rounded-full bg-background-200 p-0.5 text-xl">
      <UserAvatar imageURL={image} />
      <p className="font-semibold text-text-important">{name}</p>
      <Dropdown customParent>
        <ul className="bg-background-200 p-2 ">
          <li tabIndex={0}>Profile</li>
          <li tabIndex={0}>Settings</li>
          <li tabIndex={0}>Log out</li>
        </ul>
      </Dropdown>
    </section>
  );
}
export default User;
