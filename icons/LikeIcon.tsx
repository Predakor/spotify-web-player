import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

function LikeIcon({ liked }: { liked?: boolean }) {
  return liked ? <MdFavorite /> : <MdFavoriteBorder />;
}
export default LikeIcon;
