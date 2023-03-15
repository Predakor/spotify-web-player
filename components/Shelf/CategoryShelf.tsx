import { cards } from '@components/Card/GoToCard';
import {
  SearchCategories,
  SearchResponses,
  SearchResult,
} from 'types/spotifyTypes';
import Shelf from './Shelf';

interface Props {
  category: SearchCategories;
  result: SearchResult;
  goTo: (e: string, item: SearchResponses) => void;
}

function CategoryShelf({ category, result, goTo }: Props) {
  const items = result[category]?.items;
  if (!items) return null;

  const GoToCard = cards[category];
  return (
    <Shelf title={category}>
      {items.map((item) => (
        <GoToCard
          data={item}
          key={item.id}
          onClick={() => goTo(item.id, item)}
        />
      ))}
    </Shelf>
  );
}

export default CategoryShelf;
