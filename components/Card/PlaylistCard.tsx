import Image from 'next/image';
import Card, { CardProps } from './index';

interface PlaylistCardProps extends CardProps {
  data: SpotifyApi.PlaylistObjectSimplified;
}
export default function PlaylistCard({ data, onClick }: PlaylistCardProps) {
  const { name, description, images } = data;
  const [image] = images;
  return (
    <Card onClick={onClick}>
      <h2 className="text-lg" key={name}>
        {name}
      </h2>
      <p>{description}</p>
      {image && (
        <Image
          src={image.url}
          alt="playlist thumnbnail"
          width={image.width / 2}
          height={image.height / 2}
        />
      )}
    </Card>
  );
}
