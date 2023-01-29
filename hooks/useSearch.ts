import { useDispatch } from 'react-redux';
import { endSearch, setQuery, startSearch } from '@store/searchSlice';
import { searchType } from 'types/spotifyTypes';
import useSpotify from './useSpotify';

export type SearchResponse = SpotifyApi.SearchResponse;

const useSearch = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const searchFor = async (query?: string, types?: searchType[]) => {
    types ??= ['album', 'artist', 'playlist', 'track', 'show', 'episode'];

    try {
      if (!query) return dispatch(setQuery(''));

      dispatch(startSearch({ query: query, types: types }));
      const response = (await spotifyApi.search(query, types)).body;
      dispatch(endSearch(response));
    } catch (error) {
      console.error(error);
    }
  };

  return searchFor;
};
export default useSearch;
