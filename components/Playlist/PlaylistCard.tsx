import { useSelector } from 'react-redux';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import { selectPlaybackData } from '@store/playbackSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from '../Card/index';

type Playlist = SpotifyApi.PlaylistObjectSimplified;
export default function PlaylistCard({ data }: { data: Playlist }) {
  const { id, name, description, uri, images } = data;
  const { context } = useSelector(selectPlaybackData) ?? {};
  const router = useRouter();

  const [image] = images;

  const thisPlaylistIsPlaying = context?.uri === uri;
  const visible = thisPlaylistIsPlaying
    ? 'bottom-0'
    : '-bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-0';
  const selectPlaylist = () => router.push(`/playlist/${id}`);

  return (
    <Card className="p-0 md:p-4 group" onClick={selectPlaylist}>
      <div className="relative w-full aspect-square ">
        <Image src={image.url} alt="album cover picture" layout="fill" />

        <PlaylistPlaybackButton
          uri={uri}
          className={`absolute right-0 ${visible} transition-all duration-300 `}
          ariaLabel={`Play/pause ${name} playlist`}
        />
      </div>

      <div className="hidden md:block text-ellipsis overflow-clip">
        <p className="py-5 text-xl text-text-important font-semibold">{name}</p>
        <p>{description}</p>
      </div>
    </Card>
  );
}
