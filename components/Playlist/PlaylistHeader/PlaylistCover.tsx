import { lazy } from 'react';
import { SpotifyImage } from 'next-auth/providers/spotify';

const Image = lazy(() => import('next/image'));

export default function PlaylistCover({ images }: { images: SpotifyImage[] }) {
  const [image] = images;

  if (!image?.url) {
    return (
      <div className="relative aspect-square h-full w-full bg-background-200">
        Add image placeholder
      </div>
    );
  }

  return (
    <div className="relative aspect-square h-full w-full ">
      <Image
        src={image.url}
        alt="playlist cover"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
