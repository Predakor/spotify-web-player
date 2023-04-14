import { ContentCard } from '@components/Card';
import Card from '@components/Card/ContentCard';
import Shelf from '@components/Shelf/Shelf';
import { useFeaturedPlaylists } from '@hooks/spotify/Info';
import useNewReleases from '@hooks/spotify/Info/useNewReleases';
import useTopArtists from '@hooks/spotify/Info/useTopArtists';
import useTopItems from '@hooks/spotify/Info/useTopItems';
import Loading from 'Layout/Loading';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { push } = useRouter();
  const { value, loading, error } = useFeaturedPlaylists();
  const { value: releases } = useNewReleases();
  const { value: items } = useTopItems();
  const { value: artists } = useTopArtists();

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!value) return <div>{'Nothing Found'}</div>;

  const { message, playlists } = value;

  return (
    <>
      <Head>
        <title>Discofy</title>
      </Head>
      <section className="flex flex-col gap-8">
        <Shelf title={message ?? ''}>
          {playlists.items.map((playlist) => (
            <Card data={playlist} onClick={push} key={playlist.id} />
          ))}
        </Shelf>

        <Shelf title={releases?.message ?? 'New releases'}>
          {releases?.albums.items.map((item) => (
            <ContentCard data={item} onClick={push} key={item.id} />
          ))}
        </Shelf>

        <Shelf title={'Your favourite '}>
          {items &&
            items.items.map((item) => (
              <Card data={item} onClick={push} key={item.id} />
            ))}
        </Shelf>

        <Shelf title={'Your favorite artists'}>
          {artists?.items.map((item) => (
            <Card data={item} onClick={push} key={item.id} />
          ))}
        </Shelf>
      </section>
    </>
  );
};

export default Home;
