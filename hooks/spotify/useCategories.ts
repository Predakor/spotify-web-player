import { useEffect } from 'react';
import useFetchedValue from '@hooks/useFetchedValue';
import useSpotify from './useSpotify';

type Categories = SpotifyApi.MultipleCategoriesResponse;

function useCategories() {
  const spotifyApi = useSpotify();
  const [categories, actions] = useFetchedValue<Categories>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await spotifyApi.getCategories();
        actions.fetchSucces(response.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetchCategories();
  }, [actions, spotifyApi]);
  return categories;
}
export default useCategories;
