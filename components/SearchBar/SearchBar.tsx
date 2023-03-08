import { useEffect, useState } from 'react';
import { useSearchOptions } from '@hooks/useSearch';
import { SearchIcon } from '@icons/NavIcons';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const { setQuery } = useSearchOptions();

  useEffect(() => {
    const timeoutID = setTimeout(() => setQuery(inputValue), 300);
    return () => clearTimeout(timeoutID);
  }, [inputValue]);

  return (
    <form
      className="flex flex-1 items-center gap-2 rounded bg-white text-2xl md:flex-grow-0 md:rounded-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="pl-4 text-2xl text-black">
        <SearchIcon active={false} />
      </div>
      <input
        className="flex-1 bg-transparent py-2 text-black outline-none"
        type="search"
        placeholder={'Search for songs'}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
export default SearchBar;
