import { useEffect, useState } from 'react';

function useWidthToCols() {
  const [cols, setCols] = useState(widthToGridCols(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newCols = widthToGridCols(window.innerWidth);
      if (newCols !== cols) setCols(newCols);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cols]);
  return cols;
}

function widthToGridCols(width: number) {
  if (width < 640) return 2;
  if (width < 768) return 3;
  if (width < 1024) return 4;
  if (width < 1280) return 5;
  if (width < 1536) return 6;
  return 7;
}

export default useWidthToCols;
