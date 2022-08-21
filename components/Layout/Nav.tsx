import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href={'/'}>navigation element</Link>
      <Link href={'/profile'}>navigation element</Link>
    </nav>
  );
}
export default Nav;
