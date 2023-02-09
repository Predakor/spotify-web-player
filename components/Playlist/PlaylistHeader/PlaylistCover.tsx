/* eslint-disable @next/next/no-img-element */
import { SpotifyImage } from 'next-auth/providers/spotify';

export default function PlaylistCover({ images }: { images: SpotifyImage[] }) {
  const [image] = images;

  if (!image) {
    return <div className="h-full aspect-square bg-black shadow-2xl" />;
  }

  return (
    <div className="relative h-full shadow-2xl">
      <img
        className="h-full"
        src={image.url}
        alt="playlist cover"
        loading={'lazy'}
      />
    </div>
  );
}
