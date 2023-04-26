import CategoryButton from './CategoryButton';

type Category = {
  name: string;
};

interface Props {
  categories: Category[];
  currentCategory: string | undefined;
  onClick: (category: string) => void;
}

function CategoriesList({ categories, currentCategory, onClick }: Props) {
  return (
    <>
      {categories.map(({ name }) => (
        <CategoryButton
          onClick={() => onClick(name)}
          active={currentCategory === name}
          key={name}
        >
          {`${name}s`}
        </CategoryButton>
      ))}
    </>
  );
}

export default CategoriesList;
