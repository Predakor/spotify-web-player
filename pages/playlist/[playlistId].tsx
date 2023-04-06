import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import PlaylistPanel from '@components/Playlist/PlaylistPanel';
import PlaylistTracks from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import { usePlaylistInfo } from '@hooks/spotify/Info';
import Layout from 'Layout/Layouts/Layout';
import Loading from 'Layout/Loading';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Playlist: NextPageWithLayout = () => {
  const { loading, value: playlist, error } = usePlaylistInfo();

  if (loading) return <Loading />;
  if (error) return <h2>Something went wrong</h2>;
  if (!playlist) return <h2>Playlist has no tracks</h2>;

  return (
    <>
      <Head>
        <title>{playlist.name ?? 'Discofy'}</title>
      </Head>
      <PlaylistPanel playlist={playlist} />
      <PlaylistTracks playlist={playlist} />
    </>
  );
};

Playlist.getLayout = (page) => (
  <Layout extendHeader={<PlaylistHeader />}>{page}</Layout>
);
export default Playlist;
