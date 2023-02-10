import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import Nav from './Nav';

function Aside() {
  return (
    <aside className="absolute z-10 hidden h-screen bg-background lg:static lg:z-0 lg:row-span-full lg:block">
      <div className="sticky top-0 left-0 flex flex-col gap-4 p-4">
        <Nav />
        <hr />
        <UserPlaylists />
      </div>
    </aside>
  );
}
export default Aside;
