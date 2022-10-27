import Image from 'next/image';
import React from 'react';

const CurrentSong = ({ songInfo }: { songInfo: Spotify.Track | undefined }) => {
  if (!songInfo) return <div className="h-14"></div>;

  const { name, album, artists } = songInfo;

  return (
    <div className="flex gap-4 justify-self-start">
      <div className="">
        <Image
          src={album.images[0].url}
          alt="current song thumbnail"
          width={48}
          height={48}
        />
      </div>

      <div>
        <h3 className="text-secondary-100 text-lg">{name}</h3>
        <p className="text-secondary-400">{artists[0].name}</p>
      </div>
    </div>
  );
};
export default React.memo(CurrentSong);
