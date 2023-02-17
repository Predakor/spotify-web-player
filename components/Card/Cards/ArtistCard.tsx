import { PlaybackButton } from '@components/Button/PlaybackButtons';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import useSpotifyControls from '@hooks/useSpotifyControls';
import { useRouter } from 'next/router';
import Card from '../index';

type Playlist = SpotifyApi.ArtistObjectFull;
export default function PlaylistCard({ data }: { data: Playlist }) {
  const { id, name, uri, images } = data;
  const router = useRouter();
  const [image] = images;

  const selectPlaylist = () => {
    router.push(`/artist/${id}`);
  };

  return (
    <Card className="group p-0 md:p-8" onClick={selectPlaylist}>
      <div className="relative aspect-square w-full ">
        <div className="aspect-square w-full">
          <CoverImage url={image?.url ?? ''} />
        </div>

        <PlaylistPlaybackButton
          uri={uri}
          className={`absolute right-0 -bottom-8 z-50 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100`}
          ariaLabel={`Play/pause ${name} artist `}
        />
      </div>

      <div className="hidden overflow-clip text-ellipsis md:block">
        <h2 className="py-5 text-xl font-semibold text-text-important">
          {name}
        </h2>
      </div>
    </Card>
  );
}
