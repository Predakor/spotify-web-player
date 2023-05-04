import CardList from '@components/Card/CardList';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import PagingShelf from '@components/Shelf/PagingShelf';
import useInfo from '@hooks/spotify/Info/useInfo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { push } = useRouter();
  const info = useInfo();

  const [featuredPlaylists, getFeaturedPlaylists] = info.featuredPlaylists;
  const [newReleases, getNewReleases] = info.newReleases;
  const [userTopArtists, getUserTopArtists] = info.userTopArtists;
  const [userTopTracks, getUserTopTracks] = info.userTopTracks;

  return (
    <>
      <Head>
        <title>Discofy</title>
      </Head>

      <PageHeader>
        <h1>hello</h1>
      </PageHeader>

      <PageContent>
        <FetchingComponent fetchValue={featuredPlaylists}>
          {({ playlists, message }) => (
            <PagingShelf
              title={message ?? 'New releases'}
              paging={playlists}
              //@ts-expect-error noo
              pagingFunction={getFeaturedPlaylists}
            >
              {(dataItems) => <CardList data={dataItems} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>

        <FetchingComponent fetchValue={newReleases}>
          {({ albums, message }) => (
            <PagingShelf
              title={message ?? 'New releases'}
              paging={albums}
              //@ts-expect-error noo
              pagingFunction={getNewReleases}
            >
              {(releases) => <CardList data={releases} onClick={push} />}
            </PagingShelf>
          )}
        </FetchingComponent>

        <FetchingComponent fetchValue={userTopTracks}>
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

        <FetchingComponent fetchValue={userTopArtists}>
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
