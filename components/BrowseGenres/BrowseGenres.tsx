import { useEffect, useState } from 'react';
import CategoryCard from '@components/Card/CategoryCard';
import Shelf from '@components/Shelf/Shelf';
import useSpotify from '@hooks/spotify/useSpotify';
import { PagingCategories } from '../../pages/search/index';

export function BrowseGenres() {
  const spotifyApi = useSpotify();
  const [pagingCategories, setPagingCategories] = useState<PagingCategories>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await spotifyApi.getCategories();
        setPagingCategories(response.body);
      } catch (error) {}
    };
    fetchCategories();
  }, [spotifyApi]);

  if (!pagingCategories?.categories) return null;

  return (
    <Shelf title="browse all">
      {pagingCategories.categories.items.map((category) => (
        <CategoryCard
          category={category}
          onClick={() => {
            1;
          }}
          key={category.id}
        />
      ))}
    </Shelf>
  );
}
