import PlaylistDetails from '@components/Playlist/PlaylistDetails';
import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import TrackList from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import usePlaylistInfo from '@hooks/usePlaylistInfo';
import Layout from 'Layout';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Playlist: NextPageWithLayout = () => {
  const playlistData = usePlaylistInfo();
  if (!playlistData) return <h3>loading</h3>;

  return (
    <>
      <Head>
        <title>{playlistData.name ?? 'Discofy'}</title>
      </Head>
      <section className="relative flex flex-col gap-10 py-5 ">
        <PlaylistDetails playlist={playlistData} />
        <TrackList tracks={playlistData.tracks.items} />
      </section>
    </>
  );
};

Playlist.getLayout = (page) => (
  <Layout extendHeader={<PlaylistHeader />}>{page}</Layout>
);
export default Playlist;
