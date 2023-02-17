import { useSelector } from 'react-redux';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { selectPlaybackData } from '@store/playbackSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from '../index';

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
    <Card className="group p-0 md:p-8 " onClick={selectPlaylist}>
      <div className="relative aspect-square w-full ">
        <CoverImage url={image?.url ?? ''} />

        <PlaylistPlaybackButton
          uri={uri}
          className={`absolute right-0 ${visible} transition-all duration-300 `}
          ariaLabel={`Play/pause ${name} playlist`}
        />
      </div>

      <div className="hidden overflow-clip text-ellipsis md:block">
        <p className="py-5 text-xl font-semibold text-text-important">{name}</p>
        <p>{description}</p>
      </div>
    </Card>
  );
}
