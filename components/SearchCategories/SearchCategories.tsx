import { useSelector } from 'react-redux';
import { selectSearch } from '@store/searchSlice';

const searchCategories = [
  'album',
  'artist',
  'playlist',
  'track',
  'show',
  'episode',
];
function SearchCategories() {
  const { data, query } = useSelector(selectSearch);

  if (!query || !data) return <></>;

  return (
    <div className="flex gap-4 mt-2 w-full  order-last">
      {searchCategories.map((category) => {
        return (
          <div
            className="p-2 px-4 bg-secondary-800 rounded-full"
            key={category}
          >
            <p>{category}</p>
          </div>
        );
      })}
    </div>
  );
}
export default SearchCategories;
