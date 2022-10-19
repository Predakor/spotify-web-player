import PlaylistCard from '@components/Card/PlaylistCard';
import useSpotify from 'hooks/useSpotify';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home = () => {
  const spotifyApi = useSpotify();
  const [featuredPlaylists, setFeaturedPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);

  useEffect(() => {
    spotifyApi.getFeaturedPlaylists().then((response) => {
      try {
        setFeaturedPlaylists(response.body.playlists.items);
      } catch (error) {
        console.log(error);
      }
    });
  }, [spotifyApi]);

  return (
    <>
      <Head>
        <title>Discofy</title>
        <meta name="description" content="Custom spotify web player " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-5">
        <h1 className="text-2xl text-center py-5">
          Hey, Let&apos;s listen something
        </h1>
        <div className="grid grid-cols-2 gap-10 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featuredPlaylists &&
            featuredPlaylists.map((playlist) => (
              <PlaylistCard data={playlist} key={playlist.id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
