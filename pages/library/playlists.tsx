import { ReactElement } from 'react';
import CardList from '@components/Card/CardList';
import LibraryCategories from '@components/Categories/LibraryNav';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Grid from '@components/Grid/Grid';
import PageContent from '@components/Page/PageContent';
import SavedTracks from '@components/Track/SavedTracks';
import useUserPlaylists from '@hooks/spotify/Info/useUserPlaylists';
import useUserSavedTracks from '@hooks/spotify/Info/useUserSavedTracks';
import Layout from '@layout/Layouts';
import { useRouter } from 'next/router';

const Playlists = () => {
  const fetchingPlaylists = useUserPlaylists();
  const fetchingSavedTracks = useUserSavedTracks();
  const { push } = useRouter();

  return (
    <PageContent>
      <FetchingComponent
        fetchValue={fetchingPlaylists}
        onNull={<h2>No playlists yet add something</h2>}
      >
        {({ items }) => (
          <Grid title="Playlists">
            <FetchingComponent fetchValue={fetchingSavedTracks}>
              {(savedTracks) => <SavedTracks tracks={savedTracks} />}
            </FetchingComponent>
            <CardList data={items} onClick={push} />
          </Grid>
        )}
      </FetchingComponent>
    </PageContent>
  );
};

Playlists.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Playlists;
