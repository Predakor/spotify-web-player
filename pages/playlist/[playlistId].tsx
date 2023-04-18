import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import PlaylistPanel from '@components/Playlist/PlaylistPanel';
import PlaylistTracks from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import { usePlaylistInfo } from '@hooks/spotify/Info';
import Layout from 'Layout/Layouts/Layout';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Playlist: NextPageWithLayout = () => {
  const fetchingPlaylist = usePlaylistInfo();

  return (
    <FetchingComponent fetchValue={fetchingPlaylist}>
      {(playlist) => (
        <>
          <Head>
            <title>{playlist.name}</title>
          </Head>
          <PlaylistPanel playlist={playlist} />
          <PlaylistTracks playlist={playlist} />
        </>
      )}
    </FetchingComponent>
  );
};

Playlist.getLayout = (page) => (
  <Layout extendHeader={<PlaylistHeader />}>{page}</Layout>
);
export default Playlist;
