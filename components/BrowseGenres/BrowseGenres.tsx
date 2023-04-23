import CategoryCard from '@components/Card/CategoryCard';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Shelf from '@components/Shelf/Shelf';
import useCategories from '@hooks/spotify/useCategories';
import { useRouter } from 'next/router';

function BrowseGenres() {
  const { push } = useRouter();
  const fetchingCategories = useCategories();

  return (
    <FetchingComponent fetchValue={fetchingCategories}>
      {({ categories }) => (
        <Shelf title="browse all">
          {categories.items.map((category) => (
            <CategoryCard
              category={category}
              onClick={() => push(`/genre/${category.id}`)}
              key={category.id}
            />
          ))}
        </Shelf>
      )}
    </FetchingComponent>
  );
}
export default BrowseGenres;
