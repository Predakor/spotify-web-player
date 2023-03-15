import { useSelector } from 'react-redux';
import { cards } from '@components/Card/GoToCard';
import Shelf from '@components/Shelf/Shelf';
import { selectRecentSearches } from '@store/recentSearchSlice';
import { useRouter } from 'next/router';
import { SearchCategories, SearchType } from 'types/spotifyTypes';

function RecentSearches() {
  const router = useRouter();
  const searches = useSelector(selectRecentSearches);

  if (!searches.length) return null;

  const goTo = (type: SearchType, id: string) => router.push(`/${type}/${id}`);

  return (
    <Shelf title="recent searches">
      {searches.map((search) => {
        const Card = cards[(search.type + 's') as SearchCategories];
        return (
          <Card
            data={search}
            onClick={() => goTo(search.type, search.id)}
            key={search.id}
          />
        );
      })}
    </Shelf>
  );
}
export default RecentSearches;
