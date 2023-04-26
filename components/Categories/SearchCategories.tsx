import { allSearchTypes, searchParams } from '@utils/commons';
import { useRouter } from 'next/router';
import { SearchType } from 'types/spotifyTypes';
import CategoriesList from './CategoriesList';
import CategoryButton from './CategoryButton';

function SearchCategories() {
  const { push, query } = useRouter();
  const { searchquery, type } = query as searchParams;

  const setCategory = (category?: SearchType) => {
    push({ query: { searchquery, type: category } });
  };

  return (
    <section
      className={`carousel order-last w-full gap-2`}
      aria-label={'Search filters'}
    >
      <CategoryButton active={!type} onClick={() => setCategory()}>
        All
      </CategoryButton>

      <CategoriesList
        categories={allSearchTypes.map((category) => ({ name: category }))}
        currentCategory={type}
        onClick={(category) => setCategory(category as SearchType)}
      />
    </section>
  );
}

export default SearchCategories;
