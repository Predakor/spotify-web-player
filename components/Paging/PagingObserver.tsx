import { useEffect, useRef } from 'react';
import useObserver from '@hooks/useObserver';

function PagingObserver({ onScroll }: { onScroll: VoidFunction }) {
  const target = useRef<HTMLElement>(null);
  const observer = useObserver((e) => {
    if (e.isIntersecting) onScroll();
  });

  useEffect(() => {
    if (!target.current) return;
    observer.observe(target.current);
  }, [observer]);

  return (
    <span
      ref={target}
      className="absolute bottom-0 h-1 w-full"
      aria-hidden={true}
    />
  );
}

export default PagingObserver;
