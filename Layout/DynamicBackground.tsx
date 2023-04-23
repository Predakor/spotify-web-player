import { idToHsl } from '@utils/idToColor';
import { useRouter } from 'next/router';

function DynamicBackground() {
  const { query, asPath } = useRouter();
  const [id] = Object.values(query);
  const isValidPage = id && asPath !== '/search';

  let backgroundColor = 'black';

  if (isValidPage) {
    const [h, s, l] = idToHsl(id.toString());
    const hsl = `${h},${s}%,${l}%`;
    backgroundColor = `hsl(${hsl})`;
  }

  return (
    <span
      className="absolute -z-50 h-[70vh] w-full bg-gradient-to-t from-background-100 transition-colors duration-300"
      style={{ backgroundColor: backgroundColor }}
    />
  );
}

export default DynamicBackground;
