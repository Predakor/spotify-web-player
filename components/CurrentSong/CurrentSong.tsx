import Image from 'next/image';
import React from 'react';

const CurrentSong = ({ songInfo }: { songInfo: Spotify.Track | null }) => {
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
        <h3 className="text-secondary-100 text-lg">
          <a href={songInfo.uid}>{name}</a>
        </h3>
        <p className="text-secondary-400">
          <a href={artists[0].url}>{artists[0].name}</a>
        </p>
      </div>
    </div>
  );
};
export default React.memo(CurrentSong);
