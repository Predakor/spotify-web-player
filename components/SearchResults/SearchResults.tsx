import { useDispatch } from 'react-redux';
import CategoryShelf from '@components/Shelf/CategoryShelf';
import { addSearch } from '@store/recentSearchSlice';
import { allCategories } from '@utils/commons';
import { useRouter } from 'next/router';
import {
  SearchCategories,
  SearchResponses,
  SearchResult,
} from 'types/spotifyTypes';

interface args {
  id: string;
  category: SearchCategories;
  item: SearchResponses;
}

function SearchResults({ searchResult }: { searchResult: SearchResult }) {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const goToHandler = ({ id, category, item }: args) => {
    dispatch(addSearch(item));
    push(`/${category.slice(0, -1)}/${id}`);
  };

  return (
    <div className="grid auto-rows-fr">
      {allCategories.map((category) => (
        <CategoryShelf
          category={category}
          result={searchResult}
          key={category}
          goTo={(id, item) => goToHandler({ id, category, item })}
        />
      ))}
    </div>
  );
}

export default SearchResults;
