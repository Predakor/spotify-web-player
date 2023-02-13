import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useObserver from '@hooks/useObserver';
import { changeInView } from '@store/scrollSlice';
import PlaylistCover from './PlaylistCover';
import PlaylistDescription from './PlaylistDetails';

export type PlaylistType = { playlist: SpotifyApi.SinglePlaylistResponse };

function PlaylistHeader({ playlist }: PlaylistType) {
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const observer = useObserver((entry) => {
    dispatch(changeInView(entry.isIntersecting));
  });

  useEffect(() => {
    const target = targetRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [observer]);

  return (
    <header className="flex flex-col gap-4 md:flex-row md:p-4" ref={targetRef}>
      <picture className="shadow-2xl shadow-black md:h-[30vh]">
        <PlaylistCover images={playlist.images} />
      </picture>
      <PlaylistDescription playlist={playlist} />
    </header>
  );
}
export default PlaylistHeader;
