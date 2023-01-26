import useSpotify from '@hooks/useSpotify';
import { FormEvent, useCallback, useEffect, useState } from 'react';

function Search() {
  const spotifyApi = useSpotify();
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] =
    useState<SpotifyApi.TrackObjectFull[]>();

  const changeHandler = (e: HTMLInputElement) => {
    setInputValue(e.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForTrack();
  };

  const searchForTrack = useCallback(async () => {
    try {
      const result = (await spotifyApi.search(inputValue, ['track'])).body;
      if (result.tracks) {
        setSearchResults(result.tracks.items);
      }
    } catch (error) {
      console.error(error);
    }
  }, [inputValue, spotifyApi]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (!inputValue) return setSearchResults([]);

      searchForTrack();
    }, 200);

    return () => clearTimeout(timeoutID);
  }, [inputValue, searchForTrack]);

  return (
    <div>
      <h2>Search for artist</h2>
      <form className="" onSubmit={(e) => submitHandler(e)}>
        <input
          className="p-1"
          type="search"
          onChange={(e) => changeHandler(e.target)}
        />
      </form>

      {searchResults &&
        searchResults.map((result) => {
          return <p key={result.id}>{result.name}</p>;
        })}
    </div>
  );
}
export default Search;
