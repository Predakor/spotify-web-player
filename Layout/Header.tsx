import Button, { ThemeButton } from '@components/Buttons';
import User from '@components/User/User';
import usePageColor from '@hooks/usePageColor';
import { selectInView } from '@store/scrollSlice';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { SpotifyUser } from 'types/spotifyUser';

export interface HeaderProps {
  user: SpotifyUser;
  children?: ReactNode;
}
function Header({ user, children }: HeaderProps) {
  const { back } = useRouter();
  const inView = useSelector(selectInView);
  const pageColor = usePageColor({ lightness: 25 });
  const backgroundColor = pageColor || 'bg-base-200';
  const scrolledBackgroundColor = !inView ? pageColor : undefined;
  return (
    <header
      className={`min-h-16 sticky top-0 z-10 flex flex-wrap items-center gap-2 p-4 transition-colors ${backgroundColor}`}
      style={{ backgroundColor: scrolledBackgroundColor }}
    >
      <nav className="hidden md:block">
        <Button onClick={back}>{'<'}</Button>
        <Button onClick={back}>{'>'}</Button>
      </nav>

      {children}
      <div className="ml-auto hidden gap-2 md:flex">
        <ThemeButton />
        <User user={user} />
      </div>
    </header>
  );
}
export default Header;
