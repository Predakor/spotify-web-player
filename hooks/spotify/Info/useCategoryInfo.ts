import { useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useRouter } from 'next/router';
import useSpotify from '../useSpotify';

type Category = SpotifyApi.CategoryObject;

function useCategoryInfo(id?: string) {
  const spotifyApi = useSpotify();
  const { genreid: pageID } = useRouter().query;
  const [category, actions] = useFetchedValue<Category>();

  useEffect(() => {
    const fetchCategoryData = async () => {
      const genreID = id || pageID;
      if (!genreID) return;
      try {
        const request = await spotifyApi.getCategory(genreID.toString());
        actions.fetchSucces(request.body);
      } catch (error) {
        actions.fetchFail(`${error}`);
      }
    };
    fetchCategoryData();
  }, [actions, id, pageID, spotifyApi]);

  return category;
}

export default useCategoryInfo;
