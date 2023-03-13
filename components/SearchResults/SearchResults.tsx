import AlbumCard from '@components/Album/AlbumCard';
import ArtistCard from '@components/Card/ArtistCard';
import PlaylistCard from '@components/Card/PlaylistCard';
import Shelf from '@components/Shelf/Shelf';
import { SearchCategories, SearchResult } from 'types/spotifyTypes';

function SearchResults({ searchResult }: { searchResult?: SearchResult }) {
  if (!searchResult) return <h2>Nothing found</h2>;

  const { albums, artists, episodes, playlists, shows, tracks } = searchResult;

  const categories = Object.keys(searchResult) as SearchCategories[];

  return (
    <div className="grid auto-rows-fr">
      {playlists?.items && (
        <Shelf title="playlists">
          <PlaylistList playlists={playlists.items} />
        </Shelf>
      )}
      {albums?.items && (
        <Shelf title="albums">
          <AlbumList albums={albums.items} />
        </Shelf>
      )}
      {artists?.items && (
        <Shelf title="artists">
          <ArtistList artists={artists.items} />
        </Shelf>
      )}
      {tracks?.items && <MockShelf />}
      {episodes?.items && <MockShelf />}
      {shows?.items && <MockShelf />}
    </div>
  );
}

interface PlaylistProps {
  playlists?: SpotifyApi.PlaylistObjectSimplified[];
}

function PlaylistList({ playlists }: PlaylistProps) {
  if (!playlists) return <div />;
  return (
    <>
      {playlists.map((playlist) => {
        return <PlaylistCard data={playlist} key={playlist.id} />;
      })}
    </>
  );
}

type AlbumListProps = {
  albums?: SpotifyApi.AlbumObjectSimplified[];
};

function AlbumList({ albums }: AlbumListProps) {
  if (!albums) return <div />;
  return (
    <>
      {albums.map((album) => {
        return <AlbumCard data={album} key={album.id} />;
      })}
    </>
  );
}

function ArtistList({ artists }: { artists?: SpotifyApi.ArtistObjectFull[] }) {
  if (!artists) return <div />;
  return (
    <>
      {artists.map((artist) => {
        return <ArtistCard data={artist} key={artist.id} />;
      })}
    </>
  );
}

function MockShelf() {
  return (
    <Shelf title={'mock'}>
      <div className="bg-orange-400 " />
      <div className="bg-orange-400 " />
      <div className="bg-orange-400 " />
      <div className="bg-orange-400 " />
    </Shelf>
  );
}

export default SearchResults;
