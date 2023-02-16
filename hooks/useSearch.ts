import { useDispatch } from 'react-redux';
import { endSearch, setQuery, startSearch } from '@store/searchSlice';
import { searchType } from 'types/spotifyTypes';
import useSpotify from './useSpotify';

export type SearchResponse = SpotifyApi.SearchResponse;
export interface SearchOptions {
  types?: searchType[];
  limit?: number;
}

const useSearch = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const searchFor = async (query?: string, options?: SearchOptions) => {
    const limit = options?.limit ?? 4;
    const types = options?.types ?? [
      'album',
      'artist',
      'playlist',
      'track',
      'show',
      'episode',
    ];

    try {
      if (!query) return dispatch(setQuery(''));

      dispatch(startSearch({ query: query, types: types }));
      const response = spotifyApi.search(query, types, { limit: limit });
      const result = (await response).body;
      dispatch(endSearch(result));
    } catch (error) {
      console.error(error);
    }
  };

  return searchFor;
};
export default useSearch;
