import MockShelf from '@components/Shelf/MockShelf';
import { SearchCategories } from 'types/spotifyTypes';
import { AlbumCard, ArtistCard, PlaylistCard } from '..';

type Cards = Record<SearchCategories, ({}: GoCardProps<any>) => JSX.Element>;

export interface GoCardProps<T> {
  data: T;
  onClick: VoidFunction;
}

export const cards: Cards = {
  albums: AlbumCard,
  artists: ArtistCard,
  playlists: PlaylistCard,
  shows: MockShelf,
  tracks: MockShelf,
  episodes: MockShelf,
};
