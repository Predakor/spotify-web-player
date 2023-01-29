import { useDispatch } from 'react-redux';
import { endSearch, startSearch } from '@store/searchSlice';
import useSpotify from './useSpotify';

type searchType =
  | 'album'
  | 'artist'
  | 'playlist'
  | 'track'
  | 'show'
  | 'episode';
export type SearchResponse = SpotifyApi.SearchResponse;

const useSearch = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();

  const searchFor = async (query: string, types?: searchType[]) => {
    types ??= ['album', 'artist', 'playlist', 'track', 'show', 'episode'];

    try {
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
