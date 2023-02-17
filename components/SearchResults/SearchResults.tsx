import { useSelector } from 'react-redux';
import ArtistCard from '@components/Card/Cards/ArtistCard';
import PlaylistCard from '@components/Card/Cards/PlaylistCard';
import ContentShelf from '@components/ContentShelf/ContentShelf';
import { selectSearch } from '@store/searchSlice';

function SearchResults() {
  const { query, types, data, status } = useSelector(selectSearch);

  if (!data || !query) return <></>;
  if (status === 'pending') return <p>please wait</p>;

  const { albums, artists, episodes, playlists, shows, tracks } = data;

  return (
    <div className="flex flex-col gap-12 p-4">
      <ContentShelf title={'Artists'}>
        <ArtistList artists={artists?.items} />
      </ContentShelf>

      <ContentShelf title={'Albums'}>
        <AlbumList albums={albums?.items} />
      </ContentShelf>

      <ContentShelf title={'Playlists'}>
        <PlaylistList playlists={playlists?.items} />
      </ContentShelf>

      <ContentShelf title={'Episodes'}>
        <PlaylistList playlists={episodes?.items} />
      </ContentShelf>

      <ContentShelf title={'Shows'}>
        <PlaylistList playlists={shows?.items} />
      </ContentShelf>
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
