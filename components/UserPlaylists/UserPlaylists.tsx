import { useEffect, useState } from 'react';
import NavLink from '@components/NavLink/NavLink';
import useSpotifyControls from '@hooks/useSpotifyControls';
import { useRouter } from 'next/router';

type PlaylistType = SpotifyApi.PlaylistObjectSimplified;

function UserPlaylists() {
  const { asPath } = useRouter();
  const { getUserPlaylists } = useSpotifyControls();
  const [playlists, setPlaylists] = useState<PlaylistType[]>();

  useEffect(() => {
    getUserPlaylists()
      .then((result) => {
        const { items } = result.body;
        setPlaylists(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!playlists) return <p className="animate-pulse">loading</p>;
  if (!playlists.length) return <p>your playlist will be here</p>;

  return (
    <nav
      className="flex flex-col gap-2 text-xl text-secondary-200"
      aria-label="playlist"
    >
      {playlists.map((playlist) => {
        const { id, name } = playlist;
        const href = `/playlist/${id}`;
        const active = asPath === href;

        return <NavLink href={href} text={name} active={active} key={id} />;
      })}
    </nav>
  );
}
export default UserPlaylists;
