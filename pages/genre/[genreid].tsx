import useCategoryInfo from '@hooks/spotify/Info/useCategoryInfo';
import Loading from 'Layout/Loading';

function CategoryPage() {
  const { value: category, loading, error } = useCategoryInfo();

  if (loading) return <Loading />;
  if (error) return <h2>There was an error</h2>;
  if (!category) return <h2>Nothing found</h2>;


  return <div>{category.name}</div>;
}
export default CategoryPage;
