import Song from '@components/Song/Song';
import Image from 'next/image';
import useSpotify from 'hooks/useSpotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
  } = playlistData;

  console.log(playlistData);

  return (
    <section className="h-full flex flex-col gap-10 p-5">
      <header className="flex gap-5 h-2/6 p-5 bg-primary-900 ">
        <div className="relative h-full">
          <img src={images[0].url} alt="playlist cover" className="h-full" />
          {/* <Image
            src={images[0].url}
            alt="playlist cover"
            width={images[0].width || 500}
            height={images[0].height || 500}
            layout={'fill'}
            objectFit={'contain'}
            objectPosition={0}
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

      <div className="h-4/6">
        {tracks.items.map(
          (track) =>
            track.track && <Song song={track.track} key={track.track.id} />
        )}
      </div>
    </section>
  );
};
export default Playlist;
