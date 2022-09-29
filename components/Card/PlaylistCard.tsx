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
    <Card onClick={selectPlaylist}>
      <h2 className="text-lg">{name}</h2>
      <p>{description}</p>
      {image && (
        <Image
          src={image.url}
          alt="playlist thumnbnail"
          width={200}
          height={200}
        />
      )}
    </Card>
  );
}
