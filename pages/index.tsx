import CardList from '@components/Card/CardList';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import PagingShelf from '@components/Shelf/PagingShelf';
import { useFeaturedPlaylists } from '@hooks/spotify/Info';
import useNewReleases from '@hooks/spotify/Info/useNewReleases';
import useTopArtists from '@hooks/spotify/Info/useTopArtists';
import useTopItems from '@hooks/spotify/Info/useTopItems';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { push } = useRouter();
  const releases = useNewReleases();
  const fetchedTopItems = useTopItems();
  const fetchedTopArtists = useTopArtists();
  const fetchedPlaylists = useFeaturedPlaylists();

  return (
    <>
      <Head>
        <title>Discofy</title>
      </Head>

      <PageHeader>
        <h1>hello</h1>
      </PageHeader>

      <PageContent>
        <FetchingComponent fetchValue={fetchedPlaylists}>
          {({ playlists, message }) => (
            <PagingShelf
              title={message ?? 'New releases'}
              paging={playlists}
              //@ts-expect-error noo
              pagingFunction={() => playlists}
            >
              {(dataItems) => <CardList data={dataItems} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>

        <FetchingComponent fetchValue={releases}>
          {({ albums, message }) => (
            <PagingShelf
              title={message ?? 'New releases'}
              paging={albums}
              //@ts-expect-error noo
              pagingFunction={() => 1}
            >
              {(releases) => <CardList data={releases} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>

        <FetchingComponent fetchValue={fetchedTopItems}>
          {(topItems) => (
            <PagingShelf
              title={'Your favourite'}
              paging={topItems}
              //@ts-expect-error noo
              pagingFunction={() => 1}
            >
              {(items) => <CardList data={items} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>

        <FetchingComponent fetchValue={fetchedTopArtists}>
          {(topArtists) => (
            <PagingShelf
              title={'Your favourite artists'}
              paging={topArtists}
              //@ts-expect-error noo
              pagingFunction={() => 1}
            >
              {(releases) => <CardList data={releases} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>
      </PageContent>
    </>
  );
};

export default Home;
