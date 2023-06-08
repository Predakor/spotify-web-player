import CardList from '@components/Card/CardList';
import LibraryCategories from '@components/Categories/LibraryNav';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Grid from '@components/Grid/Grid';
import PageContent from '@components/Page/PageContent';
import useSavedAlbums from '@hooks/spotify/Info/useSavedAlbums';
import Layout from '@layout/Layouts';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const Albums = () => {
  const savedAlbums = useSavedAlbums();
  const { push } = useRouter();

  return (
    <PageContent>
      <FetchingComponent
        fetchValue={savedAlbums}
        onNull={<h2>No albums yet add something</h2>}
      >
        {(albums) => (
          <Grid title="Albums">
            <CardList
              data={albums.items.map(({ album }) => album)}
              onClick={push}
            />
          </Grid>
        )}
      </FetchingComponent>
    </PageContent>
  );
};

Albums.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Albums;
