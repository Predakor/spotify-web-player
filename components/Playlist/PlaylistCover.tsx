import { SpotifyImage } from 'next-auth/providers/spotify';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));

export default function PlaylistCover({ images }: { images: SpotifyImage[] }) {
  const [image] = images;

  if (!image?.url) {
    return (
      <div className="aspect-square h-full w-full bg-background-200">
        Add image placeholder
      </div>
    );
  }

  return (
    <div className="relative aspect-square h-full w-full shadow-2xl shadow-black ">
      <Image
        src={image.url}
        alt="playlist cover"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
