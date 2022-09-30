import Image from 'next/image';

const CurrentSong = ({ songInfo }: { songInfo: Spotify.Track }) => {
  if (!songInfo) return <></>;

  console.log(songInfo);

  const { name, album, artists } = songInfo;

  return (
    <div className="flex gap-4 ">
      <Image
        src={album.images[0].url}
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
