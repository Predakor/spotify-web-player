import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import Button from '@components/Button';
import User from '@components/User/User';
import usePageColor from '@hooks/usePageColor';
import { selectInView } from '@store/scrollSlice';
import { useRouter } from 'next/router';
import { SpotifyUser } from 'types/spotifyUser';

export interface HeaderProps {
  user: SpotifyUser;
  children?: ReactNode;
}
function Header({ user, children }: HeaderProps) {
  const { back } = useRouter();
  const inView = useSelector(selectInView);
  const pageColor = usePageColor({ lightness: 25 });
  const backgroundColor = inView ? 'rgba(0,0,0,0)' : pageColor;

  return (
    <header
      className={`sticky top-0 z-10 flex flex-wrap items-center gap-2 p-4 transition-colors ${
        backgroundColor ? '' : 'bg-black'
      }`}
      style={{ backgroundColor }}
    >
      <nav className="hidden md:block">
        <Button onClick={back}>{'<'}</Button>
        <Button onClick={back}>{'>'}</Button>
      </nav>

      {children}
      <User user={user} />
    </header>
  );
}
export default Header;
