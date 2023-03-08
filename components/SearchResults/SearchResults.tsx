import ArtistCard from '@components/Card/Cards/ArtistCard';
import PlaylistCard from '@components/Card/Cards/PlaylistCard';
import ContentShelf from '@components/ContentShelf/ContentShelf';
import { SearchCategories, SearchResult } from 'types/spotifyTypes';

function SearchResults({ searchResult }: { searchResult?: SearchResult }) {
  if (!searchResult) return <h2>Nothing found</h2>;

  const { albums, artists, episodes, playlists, shows, tracks } = searchResult;

  const categories = Object.keys(searchResult) as SearchCategories[];

  return (
    <div className="flex flex-col gap-12 p-4">
      {categories.map((category) => {
        const content = searchResult[category];

        return (
          <ContentShelf title={category} key={category}>
            {category === 'playlists' && (
              <PlaylistList playlists={playlists?.items} />
            )}
            {category === 'albums' && <AlbumList albums={albums?.items} />}
            {category === 'artists' && <ArtistList artists={artists?.items} />}
            {category === 'tracks' && <div></div>}
            {category === 'shows' && <AlbumList />}
            {category === 'episodes' && <AlbumList />}
          </ContentShelf>
        );
      })}
      {/* {artists && (
        <ContentShelf title={'Artists'}>
          <ArtistList artists={artists?.items} />
        </ContentShelf>
      )}

      {albums && (
        <ContentShelf title={'Albums'}>
          <AlbumList albums={albums?.items} />
        </ContentShelf>
      )}

      {playlists && (
        <ContentShelf title={'Playlists'}>
          <PlaylistList playlists={playlists?.items} />
        </ContentShelf>
      )}

      {episodes && (
        <ContentShelf title={'Episodes'}>
          <PlaylistList playlists={episodes?.items} />
        </ContentShelf>
      )}

      {shows && (
        <ContentShelf title={'Shows'}>
          <PlaylistList playlists={shows?.items} />
        </ContentShelf>
      )} */}
    </div>
  );
}

interface PlaylistProps {
  playlists?: SpotifyApi.ContextObject[];
}

function PlaylistList({ playlists }: PlaylistProps) {
  if (!playlists) return <div />;
  return (
    <>
      {playlists.map((album) => {
        const { id, name, total_tracks } = album;
        return <PlaylistCard data={album} key={id} />;
      })}
    </>
  );
}

type AlbumListProps = {
  albums?: SpotifyApi.ContextObject[];
};

function AlbumList({ albums }: AlbumListProps) {
  if (!albums) return <div />;
  return (
    <>
      {albums.map((album) => {
        const { id, name, total_tracks } = album;
        return <PlaylistCard data={album} key={id} />;
      })}
    </>
  );
}

function ArtistList({ artists }: { artists?: SpotifyApi.ArtistObjectFull[] }) {
  if (!artists) return <div />;
  return (
    <>
      {artists.map((artist) => {
        const { id, name, total_tracks } = artist;
        return <ArtistCard data={artist} key={id} />;
      })}
    </>
  );
}

export default SearchResults;
