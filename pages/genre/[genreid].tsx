import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import useCategoryInfo from '@hooks/spotify/Info/useCategoryInfo';

function CategoryPage() {
  const fetchingGenre = useCategoryInfo();

  return (
    <FetchingComponent fetchValue={fetchingGenre}>
      {(genre) => <h2>{genre.name}</h2>}
    </FetchingComponent>
  );
}
export default CategoryPage;
