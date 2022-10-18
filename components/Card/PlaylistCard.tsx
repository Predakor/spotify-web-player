import Image from 'next/image';
import { useRouter } from 'next/router';
import Card, { CardProps } from './index';

interface PlaylistCardProps extends CardProps {
  data: SpotifyApi.PlaylistObjectSimplified;
}
export default function PlaylistCard({ data }: PlaylistCardProps) {
  const { id, name, description, images } = data;
  const router = useRouter();
  const [image] = images;

  const selectPlaylist = () => router.push(`/playlist/${id}`);
  return (
    <Card
      className="relative rounded bg-gray-800 bg-opacity-60 p-5
      hover:bg-opacity-100 hover:cursor-pointer transition-colors"
      onClick={selectPlaylist}
    >
      <Image
        className="rounded"
        src={image.url}
        alt="album cover picture"
        width={50}
        height={50}
        layout="responsive"
      />

      <h2 className="text-xl py-5">{name}</h2>
      <p className="text-ellipsis">{description}</p>
    </Card>
  );
}
