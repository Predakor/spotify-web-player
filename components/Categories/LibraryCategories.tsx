import { useRouter } from 'next/router';
import CategoriesList from './CategoriesList';

const categories = [
  { name: 'playlist' },
  { name: 'album' },
  { name: 'artist' },
  { name: 'podcasts' },
];

function LibraryCategories() {
  const { push, pathname } = useRouter();

  const goTo = (route: string) => push(`${route}s`);
  return (
    <section
      className={`flex items-center gap-2`}
      aria-label={'Library categories'}
    >
      <CategoriesList
        categories={categories}
        currentCategory={pathname}
        onClick={goTo}
      />
    </section>
  );
}
export default LibraryCategories;
