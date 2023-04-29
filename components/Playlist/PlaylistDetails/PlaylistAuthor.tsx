import { useState, useEffect } from 'react';
import UserAvatar from '@components/User/UserAvatar';
import useSpotify from '@hooks/spotify/useSpotify';

function Author({ user }: { user: SpotifyApi.UserObjectPublic | null }) {
  const [pictureURL, setPictureURL] = useState<string>();
  const spotifyApi = useSpotify();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const request = user ? spotifyApi.getUser(user.id) : spotifyApi.getMe();
        const images = (await request).body.images;
        setPictureURL(images?.at(0)?.url);
      } catch (error) {}
    };
    fetchUser();
  }, [user?.id]);

  return (
    <span className="flex items-center gap-2">
      <UserAvatar imageURL={pictureURL} />
      <p>{user?.display_name ?? null}</p>
    </span>
  );
}
export default Author;
