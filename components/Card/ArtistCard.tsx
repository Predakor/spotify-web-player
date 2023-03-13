/* eslint-disable @next/next/no-img-element */
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { useRouter } from 'next/router';
import GoCard from './GoCard';

type Playlist = SpotifyApi.ArtistObjectFull;
export default function PlaylistCard({ data }: { data: Playlist }) {
  const { id, name, uri, images } = data;
  const [image] = images;
  const { push } = useRouter();
  const goToArtistPage = () => push(`artist/${id}`);

  return (
    <GoCard title={name} content={'artist'} onClick={goToArtistPage}>
      <div className="relative">
        <CoverImage
          url={image?.url}
          className="aspect-square h-auto rounded-full"
        />
        <PlaylistPlaybackButton
          uri={uri}
          className={
            'absolute right-0 bottom-0 transform-gpu opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100'
          }
          ariaLabel={`Play/pause ${name} artist`}
        />
      </div>
    </GoCard>
  );
}
