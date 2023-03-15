import { useEffect, useState } from 'react';
import PlaylistCard from '@components/Card/PlaylistCard';
import useSpotify from '@hooks/spotify/useSpotify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const spotifyApi = useSpotify();
  const [featuredPlaylists, setFeaturedPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const { push } = useRouter();

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
        <meta
          name="description"
          content="Custom spotify web player build using react with next.js "
          lang="en"
        />
      </Head>
      <section className="grid grid-cols-2 gap-10 p-3 md:grid-cols-3 lg:grid-cols-4 ">
        {featuredPlaylists &&
          featuredPlaylists.map((playlist) => (
            <PlaylistCard
              data={playlist}
              key={playlist.id}
              onClick={() => push(`/playlist/${playlist.id}`)}
            />
          ))}
      </section>
    </>
  );
};

export default Home;
