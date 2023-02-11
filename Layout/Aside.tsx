import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import { useRouter } from 'next/router';
import Nav from './Nav';

function Aside() {
  const { asPath } = useRouter();

  return (
    <aside className="hidden bg-background lg:row-start-1 lg:row-end-3 lg:block">
      <div className="sticky top-0 flex max-h-[90vh]  flex-col  gap-4 p-4">
        <Nav pathname={asPath} />
        <hr />
        <UserPlaylists activePath={asPath} />
      </div>
    </aside>
  );
}
export default Aside;
