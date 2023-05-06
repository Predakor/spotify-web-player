import { SearchResponse as CardData } from 'types/spotifyTypes';
import { ContentCard } from '.';

interface Props {
  data: CardData[];
  onClick: (arg0: string) => void;
}

function CardList({ data, onClick }: Props) {
  return (
    <>
      {data.map((entry) => (
        <ContentCard data={entry} onClick={onClick} key={entry.id} />
      ))}
    </>
  );
}
export default CardList;
