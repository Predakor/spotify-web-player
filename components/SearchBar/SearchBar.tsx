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
      className="flex flex-1 items-center gap-2 rounded bg-white text-2xl md:flex-none  md:rounded-full"
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
        id="search"
        type="search"
        className="w-full bg-transparent py-2 text-black outline-none"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={'Search for songs'}
        value={inputValue}
        autoFocus
      />
    </form>
  );
}

export default SearchBar;
