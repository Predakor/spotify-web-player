import SearchBar from '@components/SearchBar/SearchBar';
import SearchResults from '@components/SearchResults/SearchResults';
import { useState } from 'react';

function Search() {
  const [searchResults, setSearchResults] =
    useState<SpotifyApi.SearchResponse[]>();

  return (
    <div>
      <SearchBar setResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}
export default Search;
