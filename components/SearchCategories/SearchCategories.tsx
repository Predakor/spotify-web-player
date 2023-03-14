import { allSearchTypes, searchParams } from '@utils/commons';
import { useRouter } from 'next/router';
import { SearchType } from 'types/spotifyTypes';

interface Props {
  active: boolean;
  children: string;
  onClick: VoidFunction;
}

function CategoryButton({ active, children, onClick }: Props) {
  return (
    <button
      className={`btn-outline btn ${active ? 'btn-active' : ''}`}
      onClick={onClick}
      type={'button'}
    >
      {children}
    </button>
  );
}

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

      {allSearchTypes.map((category) => (
        <CategoryButton
          onClick={() => setCategory(category)}
          key={category}
          active={type === category}
        >
          {`${category}s`}
        </CategoryButton>
      ))}
    </section>
  );
}

export default SearchCategories;
