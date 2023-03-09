import PlaylistHeader from '@components/Playlist/PlaylistHeader';
import PlaylistPanel from '@components/Playlist/PlaylistPanel';
import TrackList from '@components/Playlist/PlaylistTracks/PlaylistTracks';
import { usePlaylistInfo } from '@hooks/spotify/Info';
import Layout from 'layout/Layout';
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
      <PlaylistPanel playlist={playlistData} />
      <TrackList tracks={playlistData.tracks.items} />
    </>
  );
};

Playlist.getLayout = (page) => (
  <Layout extendHeader={<PlaylistHeader />}>{page}</Layout>
);
export default Playlist;
