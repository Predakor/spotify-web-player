import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import Nav from './Nav';

function Aside({ className = '' }: { className: string }) {
  return (
    <aside className={`${className} text-2xl`}>
      <div className="sticky top-0 left-0 flex flex-col gap-4 p-4">
        <Nav />
        <hr />
        <UserPlaylists />
      </div>
    </aside>
  );
}
export default Aside;
