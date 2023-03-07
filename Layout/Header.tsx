import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import Button from '@components/Button';
import User from '@components/User/User';
import { selectInView } from '@store/scrollSlice';
import { useRouter } from 'next/router';
import { SpotifyUser } from 'types/spotifyUser';

export interface HeaderProps {
  user: SpotifyUser;
  children?: ReactNode;
}
function Header({ user, children }: HeaderProps) {
  const inView = useSelector(selectInView);
  const bgStyle = inView ? 'bg-transparent' : 'bg-primary-700';
  const { back } = useRouter();

  return (
    <header
      className={`top-0 flex flex-wrap items-center gap-2 ${bgStyle} sticky z-10 p-4 transition-colors lg:col-start-2 `}
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
