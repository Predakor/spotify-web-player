import useSongInfo from 'hooks/useSongInfo';
import Image from 'next/image';

const CurrentSong = () => {
  const songInfo = useSongInfo();
  if (!songInfo) return;

  const { name, artists, images } = songInfo.album;

  return (
    <div className="flex gap-4 w">
      <Image
        src={images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
      />
      <div>
        <h3>{name}</h3>
        <p>{artists[0].name}</p>
      </div>
    </div>
  );
};
export default CurrentSong;
