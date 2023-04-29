import LikeIcon from '@icons/LikeIcon';

function SavedTracksImage({ className }: { className?: string }) {
  return (
    <div
      className={`${className} cover-shadow flex aspect-square items-center justify-center bg-gradient-to-br from-violet-800 to-violet-400 p-1`}
      role={'presentation'}
    >
      <LikeIcon liked />
    </div>
  );
}
export default SavedTracksImage;
