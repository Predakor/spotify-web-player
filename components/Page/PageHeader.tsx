import { ReactElement, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import CoverImage from '@components/CoverImage/CoverImage';
import useObserver from '@hooks/useObserver';
import { changeInView } from '@store/scrollSlice';

interface Props {
  children: ReactElement;
  images: SpotifyApi.ImageObject[];
}

function PageHeader({ children, images }: Props) {
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
      <CoverImage url={images.at(0)?.url} className="aspect-square h-[30vh]" />
      <section ref={targetRef}>{children}</section>
    </header>
  );
}
export default PageHeader;
