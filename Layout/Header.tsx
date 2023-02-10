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
  const viewStyle = inView ? 'bg-none' : 'bg-primary-400';

  return (
    <>
      <header
        className={`sticky top-0 flex flex-wrap items-center bg-transparent ${viewStyle} z-10 p-4 transition-colors`}
      >
        <div>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>

        {children}
        <User user={user} />
      </header>
    </>
  );
}
export default Header;
