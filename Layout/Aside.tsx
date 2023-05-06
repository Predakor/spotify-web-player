import { useMediaQuery } from 'react-responsive';
import SavedTracksImage from '@components/CoverImage/SavedTracksImage';
import IconLink from '@components/NavLink/IconLink';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/router';
import { Nav } from './Nav';

function Aside() {
  const { asPath } = useRouter();
  const toogleDarkMode = useTheme();
  const isMobile = useMediaQuery({ maxWidth: '1024px' });

  if (isMobile) return null;

  return (
    <aside className="row-span-3 bg-base-100 p-4 py-2">
      <button className="btn" onClick={toogleDarkMode}>
        theme
      </button>
      <div className="menu sticky top-0 max-h-[90vh] gap-4">
        <Nav pathname={asPath} />
        <IconLink
          href={'/library/tracks'}
          active={asPath === '/library/tracks'}
          text={'Liked songs'}
        >
          <SavedTracksImage className="rounded" />
        </IconLink>
        <hr />
        <UserPlaylists activePath={asPath} />
      </div>
    </aside>
  );
}
export default Aside;
