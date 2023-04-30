import MockShelf from '@components/Shelf/MockShelf';
import { SearchResponse as CardData } from 'types/spotifyTypes';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import PlaylistCard from './PlaylistCard';
import TrackCard from './TrackCard';

export type CardProps<T> = { data: T; onClick: VoidFunction };

type GoToFunction = (route: string) => void;

const cards = {
  album: AlbumCard,
  artist: ArtistCard,
  playlist: PlaylistCard,
  show: MockShelf,
  track: TrackCard,
  episode: MockShelf,
};

interface Props {
  data: CardData;
  onClick: GoToFunction;
}

function Card({ data, onClick }: Props) {
  const TargetCard = cards[data.type];
  return (
    <TargetCard
      data={data as never}
      onClick={() => onClick(`/${data.type}/${data.id}`)}
    />
  );
}

export default Card;
