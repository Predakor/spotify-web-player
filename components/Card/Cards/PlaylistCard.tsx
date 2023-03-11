import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { useRouter } from 'next/router';
import GoCard from '../GoCard';

type Playlist = SpotifyApi.PlaylistObjectSimplified;
export default function PlaylistCard({ data }: { data: Playlist }) {
  const { id, name, description, uri, images } = data;
  const router = useRouter();

  const [image] = images;
  const goToPlaylist = () => router.push(`/playlist/${id}`);

  return (
    <GoCard title={name} content={description ?? ''} onClick={goToPlaylist}>
      <div className="relative">
        <CoverImage url={image.url} className="aspect-square h-auto w-full" />
        <PlaylistPlaybackButton
          uri={uri}
          ariaLabel={name}
          className="absolute right-0 hidden opacity-0 
          transition-all group-hover:-translate-y-full group-hover:scale-150 group-hover:opacity-100 lg:block "
        />
      </div>
    </GoCard>
  );
}
