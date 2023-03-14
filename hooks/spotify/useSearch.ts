import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import { allSearchTypes, searchParams } from '@utils/commons';
import { useRouter } from 'next/router';
import useSpotify from './useSpotify';

const useSearchResult = () => {
  const [fetchedValue, actions] = useFetchedValue<SpotifyApi.SearchResponse>();
  const { searchquery, type } = useRouter().query as searchParams;
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (!searchquery) return actions.fetchFail('no query');

    const searchFor = async () => {
      const types = type ? [type] : allSearchTypes;
      try {
        const result = (await spotifyApi.search(searchquery, types)).body;
        actions.fetchSucces(result);
      } catch (error) {
        actions.fetchFail('Not found');
      }
    };
    searchFor();
  }, [searchquery, type]);

  return fetchedValue;
};

export default useSearchResult;
