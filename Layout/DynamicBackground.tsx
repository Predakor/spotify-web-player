import { idToHsl } from '@utils/idToColor';
import { useRouter } from 'next/router';

function DynamicBackground() {
  const { query, asPath } = useRouter();
  const [id] = Object.values(query);
  const hasID = id && asPath;

  let backgroundColor = 'black';

  const defindedColor = staticBackground[asPath];
  if (defindedColor) backgroundColor = `hsl(${defindedColor})`;

  if (hasID) {
    const [h, s, l] = idToHsl(id.toString());
    const hsl = `${h},${70}%,${30}%`;
    backgroundColor = `hsl(${hsl})`;
  }

  return (
    <span
      className="absolute -z-50 h-[70vh] w-full bg-gradient-to-t from-background-100 transition-colors duration-300"
      style={{ backgroundColor: backgroundColor }}
    />
  );
}

const staticBackground: Record<string, string | undefined> = {
  '/library/tracks': '270,80%,40%',
  '/search': '',
};
export default DynamicBackground;
