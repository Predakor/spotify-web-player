import { useState, useEffect } from 'react';
import UserAvatar from '@components/User/UserAvatar';
import useSpotify from '@hooks/useSpotify';

function Author({ user }: { user: SpotifyApi.UserObjectPublic }) {
  const [pictureURL, setPictureURL] = useState('');
  const spotifyApi = useSpotify();
  useEffect(() => {
    spotifyApi.getUser(user.id).then((response) => {
      const images = response.body.images;
      if (images?.length) setPictureURL(images[0].url ?? '');
    });
  }, [user.id]);

  return (
    <span className="flex items-center gap-2">
      <UserAvatar imageURL={pictureURL} />
      <p>{user?.display_name ?? null}</p>
    </span>
  );
}
export default Author;
