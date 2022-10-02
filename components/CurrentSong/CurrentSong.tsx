import Image from 'next/image';

const CurrentSong = ({ songInfo }: { songInfo: Spotify.Track | undefined }) => {
  if (!songInfo) return <div></div>;

  const { name, album, artists } = songInfo;

  return (
    <div className="flex gap-4 justify-self-start ">
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
      />
      <div>
        <h3 className="text-gray-50 text-lg">{name}</h3>
        <p className="text-gray-400">{artists[0].name}</p>
      </div>
    </div>
  );
};
export default CurrentSong;
