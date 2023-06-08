import { ReactElement } from 'react';
import CardList from '@components/Card/CardList';
import LibraryCategories from '@components/Categories/LibraryNav';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Grid from '@components/Grid/Grid';
import PageContent from '@components/Page/PageContent';
import useFollowedArtists from '@hooks/spotify/Info/useFollowedArtists';
import Layout from '@layout/Layouts';
import { useRouter } from 'next/router';

const Artists = ({}) => {
  const router = useRouter();
  const followedArtists = useFollowedArtists();

  return (
    <PageContent>
      <FetchingComponent
        fetchValue={followedArtists}
        onNull={<h2>{"Looks like you don't follow any artists yet..."}</h2>}
      >
        {({ artists }) => (
          <Grid title="Artists">
            <CardList data={artists.items} onClick={router.push} />
          </Grid>
        )}
      </FetchingComponent>
    </PageContent>
  );
};

Artists.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Artists;
