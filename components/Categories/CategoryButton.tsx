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

export default CategoryButton;
