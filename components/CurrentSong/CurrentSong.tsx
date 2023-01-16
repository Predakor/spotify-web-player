import Artists from '@components/Artists/Artists';
import Image from 'next/image';

interface CurrentSongProps {
  songInfo: Spotify.Track | null;
}

const CurrentSong = ({ songInfo }: CurrentSongProps) => {
  if (!songInfo) return <div className="h-14"></div>;

  const { name, album, artists } = songInfo;

  return (
    <div className="flex gap-4 justify-self-start">
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={48}
        height={48}
      />

      <div>
        <h3 className="text-secondary-100 text-xl">
          <a href={songInfo.artists[0].url}>{name}</a>
        </h3>

        <Artists artists={artists} />
      </div>
    </div>
  );
};
export default CurrentSong;
