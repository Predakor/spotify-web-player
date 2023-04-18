import CategoryCard from '@components/Card/CategoryCard';
import Shelf from '@components/Shelf/Shelf';
import useCategories from '@hooks/spotify/useCategories';
import Loading from 'Layout/Loading';
import { useRouter } from 'next/router';

function BrowseGenres() {
  const { push } = useRouter();
  const { value: categories, loading, error } = useCategories();

  if (loading) return <Loading />;
  if (error) return <h2>There was an error</h2>;
  if (!categories) return <h2>Nothing found</h2>;

  return (
    <Shelf title="browse all">
      {categories.categories.items.map((category) => (
        <CategoryCard
          category={category}
          onClick={() => push(`/genre/${category.id}`)}
          key={category.id}
        />
      ))}
    </Shelf>
  );
}
export default BrowseGenres;
