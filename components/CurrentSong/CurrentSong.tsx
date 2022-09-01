import Image from 'next/image';

const CurrentSong = () => {
  return (
    <div className="flex gap-4">
      {/* <Image src={''} alt="current song thumbnail" width={50} height={50} /> */}
      <div className="w-16 h-16 bg-green-500"></div>
      <div>
        <h3>Song name</h3>
        <p>Song author</p>
      </div>
    </div>
  );
};
export default CurrentSong;
