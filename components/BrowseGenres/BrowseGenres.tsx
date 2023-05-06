import CategoryCard from '@components/Card/CategoryCard';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Grid from '@components/Grid/Grid';
import useCategories from '@hooks/spotify/useCategories';
import { useRouter } from 'next/router';

function BrowseGenres() {
  const { push } = useRouter();
  const fetchingCategories = useCategories();

  return (
    <FetchingComponent fetchValue={fetchingCategories}>
      {({ categories }) => (
        <Grid title="browse all">
          {categories.items.map((category) => (
            <CategoryCard
              category={category}
              onClick={() => push(`/genre/${category.id}`)}
              key={category.id}
            />
          ))}
        </Grid>
      )}
    </FetchingComponent>
  );
}
export default BrowseGenres;
