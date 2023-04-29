import { ReactElement } from 'react';
import { PlaylistCard } from '@components/Card';
import LibraryCategories from '@components/Categories/LibraryNav';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageContent from '@components/Page/PageContent';
import Shelf from '@components/Shelf/Shelf';
import SavedTracks from '@components/Track/SavedTracks';
import useUserPlaylists from '@hooks/spotify/Info/useUserPlaylists';
import useUserSavedTracks from '@hooks/spotify/Info/useUserSavedTracks';
import Layout from 'Layout/Layouts';
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
          <Shelf title="Playlists">
            <FetchingComponent fetchValue={fetchingSavedTracks}>
              {(savedTracks) => <SavedTracks tracks={savedTracks} />}
            </FetchingComponent>

            {items.map((playlist) => (
              <PlaylistCard
                data={playlist}
                onClick={() => push(`/playlist/${playlist.id}`)}
                key={playlist.id}
              />
            ))}
          </Shelf>
        )}
      </FetchingComponent>
    </PageContent>
  );
};

Playlists.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Playlists;
