import Card from '@components/Card/ContentCard';
import {
  SearchCategories,
  SearchResponse,
  SearchResult,
} from 'types/spotifyTypes';
import Shelf from './Shelf';

interface Props {
  category: SearchCategories;
  result: SearchResult;
  goTo: (e: string, item: SearchResponse) => void;
}

function CategoryShelf({ category, result, goTo }: Props) {
  const items = result[category]?.items;
  if (!items) return null;

  return (
    <Shelf title={category}>
      {items.map((item) => (
        <Card data={item} key={item.id} onClick={() => goTo(item.id, item)} />
      ))}
    </Shelf>
  );
}

export default CategoryShelf;
