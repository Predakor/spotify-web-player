import useTheme from '@hooks/useMode';
import { MdLightMode, MdModeNight } from 'react-icons/md';

function ThemeButton() {
  const [lightMode, setMode] = useTheme();

  return (
    <label className="swap btn-neutral swap-rotate btn-circle btn text-2xl ">
      <input type="checkbox" checked={lightMode} onChange={setMode} />
      <MdLightMode className="swap-on" />
      <MdModeNight className="swap-off" />
    </label>
  );
}
export default ThemeButton;
