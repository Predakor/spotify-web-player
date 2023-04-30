import { SearchResponse as CardData } from 'types/spotifyTypes';
import { ContentCard } from '.';

interface Props {
  data: CardData[];
  onClick: (arg0: string) => void;
}

function CardList({ data, onClick }: Props) {
  return (
    <>
      {data.map((_data) => (
        <ContentCard data={_data} onClick={onClick} key={_data.id} />
      ))}
    </>
  );
}
export default CardList;
