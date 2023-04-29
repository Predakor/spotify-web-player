import { ContentCard } from '@components/Card';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import Shelf from '@components/Shelf/Shelf';
import { useFeaturedPlaylists } from '@hooks/spotify/Info';
import useNewReleases from '@hooks/spotify/Info/useNewReleases';
import useTopArtists from '@hooks/spotify/Info/useTopArtists';
import useTopItems from '@hooks/spotify/Info/useTopItems';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { push } = useRouter();
  const fetchedPlaylists = useFeaturedPlaylists();
  const { value: releases } = useNewReleases();
  const { value: items } = useTopItems();
  const { value: artists } = useTopArtists();

  return (
    <FetchingComponent fetchValue={fetchedPlaylists}>
      {({ playlists, message }) => (
        <>
          <Head>
            <title>Discofy</title>
          </Head>

          <PageHeader>
            <h1>hello</h1>
          </PageHeader>

          <PageContent>
            <Shelf title={message ?? ''}>
              {playlists.items.map((playlist) => (
                <ContentCard data={playlist} onClick={push} key={playlist.id} />
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
                  <ContentCard data={item} onClick={push} key={item.id} />
                ))}
            </Shelf>

            <Shelf title={'Your favorite artists'}>
              {artists?.items.map((item) => (
                <ContentCard data={item} onClick={push} key={item.id} />
              ))}
            </Shelf>
          </PageContent>
        </>
      )}
    </FetchingComponent>
  );
};

export default Home;
