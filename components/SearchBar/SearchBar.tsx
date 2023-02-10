import { FormEvent, useEffect, useState } from 'react';
import useSearch from '@hooks/useSearch';
import { SearchIcon } from '@icons/NavIcons';
import { searchType } from 'types/spotifyTypes';

export interface SearchBarProps {
  types?: searchType[];
}

function SearchBar({ types }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const searchFor = useSearch();

  const changeHandler = (e: HTMLInputElement) => setInputValue(e.value);
  const searchHandler = () => searchFor(inputValue, types);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchHandler();
  };

  useEffect(() => {
    const timeoutID = setTimeout(searchHandler, 300);
    return () => clearTimeout(timeoutID);
  }, [inputValue]);

  return (
    <form
      className="flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 "
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="text-2xl text-black">
        <SearchIcon active={false} />
      </div>
      <input
        className="bg-inherit p-1 text-black outline-none"
        type="search"
        placeholder={'Search for songs'}
        onChange={(e) => changeHandler(e.target)}
      />
    </form>
  );
}
export default SearchBar;
