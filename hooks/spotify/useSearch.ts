import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  endSearch,
  selectSearch,
  setQuery as changeQuery,
  setTypes,
  startSearch,
} from '@store/searchSlice';
import { allSearchTypes } from '@utils/commons';
import { SearchType } from 'types/spotifyTypes';
import useSpotify from './useSpotify';

export interface SearchOptions {
  types?: SearchType;
  limit?: number;
}

const useSearchOptions = () => {
  const dispatch = useDispatch();
  const { query, types } = useSelector(selectSearch);

  return {
    setCategories: (newCategory?: SearchType) => {
      if (newCategory !== types) dispatch(setTypes(newCategory));
    },
    setQuery: (newQuery: string) => {
      if (newQuery !== query) dispatch(changeQuery(newQuery));
    },
  };
};

const useSearchResult = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const searchResult = useSelector(selectSearch);
  const { query, types } = searchResult;

  useEffect(() => {
    const searchFor = async (query: string, options: SearchOptions) => {
      if (!query) return dispatch(changeQuery(''));

      const limit = options.types ? 20 : options?.limit ?? 4;
      const types = options.types ? [options.types] : allSearchTypes;

      try {
        dispatch(startSearch({ query, types: options?.types }));
        const response = spotifyApi.search(query, types, { limit });
        const result = (await response).body;
        dispatch(endSearch(result));
      } catch (error) {
        console.error(error);
      }
    };
    searchFor(query, { types });
  }, [dispatch, query, spotifyApi, types]);

  return searchResult;
};

export default useSearchResult;
export { useSearchOptions };
