import { useEffect, useState } from 'react';
import { idToHsl } from '@utils/idToColor';
import { useRouter } from 'next/router';

interface options {
  saturation?: number;
  lightness?: number;
}

function usePageColor({ saturation = 70, lightness = 30 }: options = {}) {
  const [pageColor, setPageColor] = useState<string>();
  const { query, asPath } = useRouter();
  const [id] = Object.values(query);

  useEffect(() => {
    const defindedColor = staticBackground[asPath];
    if (defindedColor) return setPageColor(defindedColor);
    if (!id) return setPageColor(undefined);

    const hue = idToHsl(id.toString());
    setPageColor(`hsl(${hue},${saturation}%,${lightness}%)`);
  }, [asPath, id, lightness, saturation]);

  return pageColor;
}

const staticBackground: Record<string, string | undefined> = {
  '/library/tracks': '270,80%,40%',
};

export default usePageColor;
