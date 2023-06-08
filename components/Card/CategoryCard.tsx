import CoverImage from '@components/CoverImage/CoverImage';

interface Props {
  category: SpotifyApi.CategoryObject;
  onClick: VoidFunction;
}

function GoCard({ category, onClick }: Props) {
  const { name, icons } = category;

  return (
    <article className="card card-compact bg-base-100" onClick={onClick}>
      <div className="group card-body">
        <CoverImage
          urls={icons}
          prefferdSize="big"
          className={'aspect-square'}
        />
        <h2 className="card-title truncate">{name}</h2>
      </div>
    </article>
  );
}
export default GoCard;
