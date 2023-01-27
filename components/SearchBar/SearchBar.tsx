import useSpotify from '@hooks/useSpotify';
import { SearchIcon } from '@icons/NavIcons';
import { useState, FormEvent, useCallback, useEffect } from 'react';

type searchType =
  | 'album'
  | 'artist'
  | 'playlist'
  | 'track'
  | 'show'
  | 'episode';
export interface SearchBarProps {
  setResults: (results: SpotifyApi.SearchResponse[]) => void;
  types?: searchType[];
}

function SearchBar({ setResults, types }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  useState<SpotifyApi.TrackObjectFull[]>();
  const spotifyApi = useSpotify();

  const changeHandler = (e: HTMLInputElement) => {
    setInputValue(e.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForTrack();
  };

  const searchForTrack = useCallback(async () => {
    try {
      if (!types) {
        types = ['album', 'artist', 'playlist', 'track', 'show', 'episode'];
      }

      const promises = types.map((type) => {
        return spotifyApi.search(inputValue, [type]);
      });

      const responses = await Promise.all(promises);
      const results = responses.map((response) => response.body);
      setResults(results);
    } catch (error) {
      console.error(error);
    }
  }, [inputValue, setResults, spotifyApi]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (!inputValue) return setResults([]);

      searchForTrack();
    }, 200);

    return () => clearTimeout(timeoutID);
  }, [inputValue, searchForTrack]);

  return (
    <form
      className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full "
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="text-black text-2xl">
        <SearchIcon active={false} />
      </div>
      <input
        className="bg-inherit text-black p-1 outline-none"
        type="search"
        placeholder={'Search for songs'}
        onChange={(e) => changeHandler(e.target)}
      />
    </form>
  );
}
export default SearchBar;
