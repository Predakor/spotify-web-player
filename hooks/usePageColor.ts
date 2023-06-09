'use client';

import { idToHsl } from '@utils/idToColor';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface options {
  id?: string;
  saturation?: number;
  lightness?: number;
}

function usePageColor({ id, saturation = 70, lightness = 30 }: options = {}) {
  const [pageColor, setPageColor] = useState<string>();
  const pathname = usePathname() || '';
  const query = useSearchParams;
  const [pageID] = Object.values(query);

  id ??= pageID?.toString();

  useEffect(() => {
    const defindedColor = staticBackground[pathname];
    if (defindedColor) return setPageColor(defindedColor);
    if (!id) return setPageColor(undefined);

    const hue = idToHsl(id.toString());
    setPageColor(`hsl(${hue},${saturation}%,${lightness}%)`);
  }, [pathname, id, lightness, saturation]);

  return pageColor;
}

const staticBackground: Record<string, string | undefined> = {
  '/library/tracks': '270,80%,40%',
};

export default usePageColor;
