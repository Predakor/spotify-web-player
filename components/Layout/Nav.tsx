import LoginButton from '@components/Button/LoginButton';
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link className="text-green-600" href={'/'}>
        navigation element
      </Link>
      <LoginButton />
    </nav>
  );
}
export default Nav;
