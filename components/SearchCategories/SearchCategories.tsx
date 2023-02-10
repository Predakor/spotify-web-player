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
    <div className="order-last mt-2 flex w-full  gap-4">
      {searchCategories.map((category) => {
        return (
          <div
            className="rounded-full bg-secondary-800 p-2 px-4"
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
