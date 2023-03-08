import { useSelector } from 'react-redux';
import { useSearchOptions } from '@hooks/spotify/useSearch';
import { selectSearch } from '@store/searchSlice';
import { allSearchTypes } from '@utils/commons';

function SearchCategories() {
  const { data, query, types } = useSelector(selectSearch);
  const visible = !query && data ? 'invisible' : '';

  const { setCategories } = useSearchOptions();

  return (
    <div className={`carousel order-last w-full gap-2 ${visible}`}>
      <button
        className={`btn btn-outline ${!types ? 'btn-active' : ''}`}
        onClick={() => setCategories()}
        type={'button'}
      >
        all
      </button>

      {allSearchTypes.map((category) => {
        const active = types === category ? 'btn-active' : '';
        return (
          <button
            className={`btn btn-outline ${active}`}
            onClick={() => setCategories(category)}
            type={'button'}
            key={category}
          >
            {`${category}s`}
          </button>
        );
      })}
    </div>
  );
}
export default SearchCategories;
