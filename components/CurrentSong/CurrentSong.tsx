import { useSelector } from 'react-redux';
import Artists from '@components/Artists/Artists';
import { selectTrack } from '@store/playbackSlice';
import Image from 'next/image';

const CurrentSong = () => {
  const trackInfo = useSelector(selectTrack);

  if (!trackInfo) return <div className="h-14"></div>;
  if (trackInfo.type === 'episode') return null;

  const { name, album, artists } = trackInfo;

  const [artist] = artists;

  return (
    <div className="flex gap-4 justify-self-start">
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
      />

      <div className="flex-1 inline-block truncate">
        <h3 role={'marquee'} className="text-secondary-100 text-xl">
          <a href={artist.href}>{name}</a>
        </h3>

        <Artists artists={artists} />
      </div>
    </div>
  );
};
export default CurrentSong;
