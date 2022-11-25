import useSpotifyControls from '@hooks/useSpotifyControls';
import { changeInView } from '@store/scrollSlice';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

interface PlaylistHeaderProps {
  playlist: SpotifyApi.SinglePlaylistResponse;
}

function PlaylistHeader({ playlist }: PlaylistHeaderProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { playPlaylist } = useSpotifyControls();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      dispatch(changeInView(entry.isIntersecting));
    });
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef]);

  const {
    uri,
    name,
    type,
    owner,
    images,
    description,
    public: isPublic,
    primary_color,
  } = playlist;

  return (
    <header className="flex gap-5 h-[40vh] p-5" ref={targetRef}>
      <div className="relative h-full shadow-2xl">
        <img src={images[0].url} alt="playlist cover" className="h-full" />
      </div>

      <div className="flex flex-col justify-evenly">
        <p>
          {isPublic && 'public'} {type}
        </p>
        <h1 className="text-5xl">{name}</h1>
        <p className="text-secondary-300">{description}</p>
        <p>{owner.display_name}</p>
        <button onClick={() => playPlaylist(uri)}>Play </button>
      </div>
    </header>
  );
}

export default PlaylistHeader;
