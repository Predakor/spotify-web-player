import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import CoverImage from '@components/CoverImage/CoverImage';
import useObserver from '@hooks/useObserver';
import { changeInView } from '@store/scrollSlice';

interface Props {
  children: ReactElement;
  images: SpotifyApi.ImageObject[];
  className?: string;
  customImage?: ReactNode;
}

function PageHeader({ children, images, className, customImage }: Props) {
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
    <header className="md:grid-cols-[auto,1fr] grid gap-8 p-4" ref={targetRef}>
      {customImage ?? (
        <CoverImage
          url={images.at(0)?.url}
          className="aspect-square h-[30vh]"
        />
      )}
      <section className={className ?? ''} ref={targetRef}>
        {children}
      </section>
    </header>
  );
}
export default PageHeader;
