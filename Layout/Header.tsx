import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import User from '@components/User/User';
import { selectInView } from '@store/scrollSlice';
import { SpotifyUser } from 'types/spotifyUser';

export interface HeaderProps {
  user: SpotifyUser;
  children?: ReactNode;
}
function Header({ user, children }: HeaderProps) {
  const inView = useSelector(selectInView);
  const bgStyle = inView ? 'bg-transparent' : 'bg-primary-700';

  return (
    <>
      <header
        className={`top-0 flex flex-wrap items-center ${bgStyle} sticky z-10 p-4 transition-colors lg:col-start-2 `}
      >
        <nav>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </nav>

        {children}
        <User user={user} />
      </header>
    </>
  );
}
export default Header;
