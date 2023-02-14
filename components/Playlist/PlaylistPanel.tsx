import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useObserver from '@hooks/useObserver';
import { changeInView } from '@store/scrollSlice';
import PlaylistActions from './PlaylistActions';
import PlaylistCover from './PlaylistCover';
import PlaylistDescription from './PlaylistDetails/PlaylistDetails';

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
    <header className="grid gap-8 p-4 md:grid-cols-[auto,1fr]" ref={targetRef}>
      <picture className=" md:h-[30vh]">
        <PlaylistCover images={playlist.images} />
      </picture>
      <PlaylistDescription playlist={playlist} />
      <section className="md:col-span-2" aria-label="Playlist controls">
        <PlaylistActions
          id={playlist.id}
          uri={playlist.uri}
          name={playlist.name}
        />
      </section>
    </header>
  );
}
export default PlaylistHeader;
