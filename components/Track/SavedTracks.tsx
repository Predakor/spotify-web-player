import PlaybackButton from '@components/Button/PlaybackButtons';
import { useRouter } from 'next/router';

interface Props {
  tracks: SpotifyApi.UsersSavedTracksResponse;
}

function SavedTracks({ tracks }: Props) {
  const router = useRouter();
  if (!tracks.items) return null;

  const goToSavedTracks = () => router.push('/library/tracks');

  const previewTracks = tracks.items.slice(0, 5);
  const savedTracks = previewTracks.map(({ track }, i) => (
    <span className={i % 2 ? 'text-accent' : ''} key={track.id}>
      {`${i ? '\u00A0 •' : ''} ${track.name}`}
    </span>
  ));

  return (
    <article
      className="group card col-span-2 bg-gradient-to-br from-violet-800 to-violet-400"
      onClick={goToSavedTracks}
    >
      <div className="card-body justify-between">
        <div>{savedTracks}</div>

        <footer className="relative">
          <h3 className="text-2xl font-semibold">Liked Songs</h3>
          <p className="text-lg">{tracks.total} liked songs</p>
          <PlaybackButton
            className="absolute right-0 opacity-0 duration-300 hover:scale-125 group-hover:-translate-y-full group-hover:bg-primary-700 group-hover:opacity-100"
            onClick={goToSavedTracks}
          />
        </footer>
      </div>
    </article>
  );
}

export default SavedTracks;
