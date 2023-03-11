import { ReactNode } from 'react';
import AlbumCard from '@components/Album/AlbumCard';
import ArtistCard from '@components/Card/Cards/ArtistCard';
import PlaylistCard from '@components/Card/Cards/PlaylistCard';
import ContentShelf from '@components/ContentShelf/ContentShelf';
import { SearchCategories, SearchResult } from 'types/spotifyTypes';

function SearchResults({ searchResult }: { searchResult?: SearchResult }) {
  if (!searchResult) return <h2>Nothing found</h2>;

  const { albums, artists, episodes, playlists, shows, tracks } = searchResult;

  const categories = Object.keys(searchResult) as SearchCategories[];

  return (
    <div className="">
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

function Shelf({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="" aria-label={title}>
      <h2 className="py-4 text-3xl font-semibold">{title}</h2>
      <div className="grid grid-cols-2 gap-12 lg:w-auto lg:grid-cols-4">
        {children}
      </div>
    </section>
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
