import { useMediaQuery } from 'react-responsive';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/router';
import { Nav } from './Nav';

function Aside() {
  const { asPath } = useRouter();
  const theme = useTheme;
  const isMobile = useMediaQuery({ maxWidth: '1024px' });

  if (isMobile) return null;

  return (
    <aside className="row-start-1 row-end-3 block bg-black">
      <button className="btn" onClick={theme}>
        theme
      </button>
      <div className="menu sticky top-0 max-h-[90vh] gap-4 p-4">
        <Nav pathname={asPath} />
        <hr />
        <UserPlaylists activePath={asPath} />
      </div>
    </aside>
  );
}
export default Aside;
