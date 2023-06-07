import { MdLightMode, MdModeNight } from 'react-icons/md';

interface Props {
  light: boolean;
}
function ThemeIcon({ light }: Props) {
  return light ? <MdLightMode /> : <MdModeNight />;
}
export default ThemeIcon;
