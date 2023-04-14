import { useSelector } from 'react-redux';
import { ContentCard } from '@components/Card';
import Shelf from '@components/Shelf/Shelf';
import { selectRecentSearches } from '@store/recentSearchSlice';
import { useRouter } from 'next/router';

function RecentSearches() {
  const { push } = useRouter();
  const searches = useSelector(selectRecentSearches);

  if (!searches.length) return null;

  const recent = searches.length > 5 ? searches.slice(0, 5) : searches;

  return (
    <Shelf title="recent searches">
      {recent.map((search) => (
        <ContentCard data={search} onClick={push} key={search.id} />
      ))}
    </Shelf>
  );
}
export default RecentSearches;
