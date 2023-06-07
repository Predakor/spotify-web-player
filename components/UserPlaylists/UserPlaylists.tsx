import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import NavLink from '@components/NavLink/NavLink';
import useUserPlaylists from '@hooks/spotify/Info/useUserPlaylists';

function UserPlaylists({ activePath }: { activePath: string }) {
  const fetchingPLaylists = useUserPlaylists();

  return (
    <FetchingComponent fetchValue={fetchingPLaylists}>
      {({ items }) => (
        <nav className="flex flex-col gap-1" aria-label="List of playlists">
          {items.map((playlist) => {
            const { id, name } = playlist;
            const href = `/playlist/${id}`;
            const active = activePath === href;

            return <NavLink href={href} text={name} active={active} key={id} />;
          })}
        </nav>
      )}
    </FetchingComponent>
  );
}
export default UserPlaylists;
