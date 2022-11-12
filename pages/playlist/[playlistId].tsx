import useSpotify from 'hooks/useSpotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TrackList from '@components/TrackList/TrackList';
import Image from 'next/image';

type PlaylistType = SpotifyApi.SinglePlaylistResponse;

const Playlist = () => {
  const router = useRouter();
  const spotifyApi = useSpotify();
  const { playPlaylist } = useSpotifyControls();

  const playlistId = router.query.playlistId as string;
  const [playlistData, setPlaylistData] = useState<PlaylistType>();

  useEffect(() => {
    if (!spotifyApi.getAccessToken()) return;
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => setPlaylistData(data.body));
  }, [playlistId, spotifyApi]);

  if (!playlistData) return <h3>loading</h3>;

  const {
    uri,
    name,
    type,
    owner,
    images,
    tracks,
    description,
    public: isPublic,
    primary_color,
  } = playlistData;

  console.log(playlistData);

  return (
    <section className="flex flex-col gap-10 p-5 ">
      <span className="absolute left-0 top-0 h-4/5 w-full bg-gradient-to-b from-primary-100 to-black -z-10"></span>
      <header className="flex gap-5 h-[40vh] py-5">
        <div className="relative h-full shadow-2xl">
          <img src={images[0].url} alt="playlist cover" className="h-full" />
          {/* <Image
            src={images[0].url}
            alt="playlist cover"
            width={'100%'}
            height="100%"
          /> */}
        </div>
        <div className="flex flex-col justify-evenly">
          <p>
            {isPublic && 'public'} {type}
          </p>
          <h1 className="text-5xl">{name}</h1>
          <p className="text-secondary-300">{description}</p>
          <p>{owner.display_name}</p>
          <button onClick={() => playPlaylist(uri)}>Play </button>
        </div>
      </header>

      <TrackList tracks={tracks.items} />
    </section>
  );
};
export default Playlist;
