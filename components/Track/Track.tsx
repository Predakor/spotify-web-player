import Artists from '@components/Artists/Artists';
import Image from 'next/image';

const Song = ({ track }: { track: SpotifyApi.TrackObjectFull }) => {
  const { name, album, artists } = track;

  return (
    <div className="flex max-w-full gap-4">
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
        unoptimized
      />

      <div className="truncate">
        <p className={'text-xl text-primary-content'}>{name}</p>
        <Artists artists={artists} />
      </div>
    </div>
  );
};

export default Song;
