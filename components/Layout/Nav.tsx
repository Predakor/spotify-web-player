import UserAccount from '@components/UserAccount/UserAccount';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="flex gap-1">
      <Link className="text-green-600" href={'/'}>
        Home
      </Link>
      <Link className="text-green-600" href={'/playlist'}>
        Playlist
      </Link>
      <Link className="text-green-600" href={'/stats'}>
        Stats
      </Link>
      <Link href={'profile'}>
        <UserAccount />
      </Link>
    </nav>
  );
}
export default Nav;
