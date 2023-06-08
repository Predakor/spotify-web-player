import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageActions from '@components/Page/PageActions';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import PlaylistDescription from '@components/Playlist/PlaylistDetails/PlaylistDetails';
import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import PlaylistTracks from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import { usePlaylistInfo } from '@hooks/spotify/Info';
import Layout from '@layout/Layouts/Layout';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Playlist: NextPageWithLayout = () => {
  const [fetchingPlaylist] = usePlaylistInfo();

  return (
    <FetchingComponent fetchValue={fetchingPlaylist}>
      {(playlist) => (
        <>
          <Head>
            <title>{playlist.name}</title>
          </Head>
          <PageHeader images={playlist.images}>
            <PlaylistDescription playlist={playlist} />
          </PageHeader>

          <PageActions uri={playlist.uri} actions={'play'} moreActions={[]} />

          <PageContent>
            <PlaylistTracks playlist={playlist} />
          </PageContent>
        </>
      )}
    </FetchingComponent>
  );
};

Playlist.getLayout = (page) => (
  <Layout extendHeader={<PlaylistHeader />}>{page}</Layout>
);
export default Playlist;
