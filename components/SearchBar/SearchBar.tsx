import { useEffect, useState } from 'react';
import { SearchIcon } from '@icons/NavIcons';
import { useRouter } from 'next/router';

function SearchBar() {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState('');

  const pushQuery = () => push(`/search/${inputValue}`);

  useEffect(() => {
    const timeoutID = setTimeout(pushQuery, 500);
    return () => clearTimeout(timeoutID);
  }, [inputValue]);

  return (
    <form
      className="flex flex-1 items-center gap-2 rounded bg-white text-2xl md:flex-grow-0 md:rounded-full"
      aria-label="Searchbar"
      onSubmit={(e) => {
        e.preventDefault();
        pushQuery();
      }}
    >
      <span className="pl-4 text-2xl text-black" aria-hidden>
        <SearchIcon active={false} />
      </span>
      <input
        className="flex-1 bg-transparent py-2 text-black outline-none"
        type="search"
        placeholder={'Search for songs'}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
}

export default SearchBar;
