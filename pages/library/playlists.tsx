import { ReactElement } from 'react';
import LibraryCategories from '@components/Categories/LibraryCategories';
import PageContent from '@components/Page/PageContent';
import UserPlaylists from '@components/UserPlaylists/UserPlaylists';
import Layout from 'Layout/Layouts';

const Playlists = () => {
  return (
    <PageContent>
      <>
        <h2>Playlists</h2>
        <UserPlaylists activePath={''} />
      </>
    </PageContent>
  );
};

Playlists.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Playlists;
