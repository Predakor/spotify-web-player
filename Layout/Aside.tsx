import SavedTracksImage from '@components/CoverImage/SavedTracksImage';
import IconLink from '@components/NavLink/IconLink';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Nav } from './Nav';

function Aside() {
  const { asPath } = useRouter();
  const isMobile = useMediaQuery({ maxWidth: '1024px' });

  if (isMobile) return null;

  return (
    <aside className="row-span-3 bg-base-100">
      <div className="menu sticky top-0 max-h-[90vh] gap-4 p-4">
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
