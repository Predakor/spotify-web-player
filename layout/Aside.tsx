import SavedTracksImage from '@components/CoverImage/SavedTracksImage';
import IconLink from '@components/NavLink/IconLink';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { DesktopNav } from './Nav';

function Aside() {
  const asPath = usePathname();
  const isMobile = useMediaQuery({ maxWidth: '1024px' });

  if (isMobile) return null;

  return (
    <aside className="row-span-3 bg-base-100">
      <div className="menu sticky top-0 max-h-[90vh] gap-4 p-4">
        <DesktopNav pathname={asPath} />
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
