import { useEffect, useState } from 'react';

const [light, dark] = ['emerald', 'forest'];
const attribute = 'data-theme';

const getInitialState = () => {
  const activeTheme = document.querySelector('html')?.getAttribute(attribute);
  return activeTheme === light;
};

function useMode() {
  const [lightMode, setLightMode] = useState<boolean>(() => getInitialState());

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    const newTheme = lightMode ? light : dark;
    html.setAttribute(attribute, newTheme);
  }, [lightMode]);

  const toogleDarkMode = () => setLightMode((prev) => !prev);

  return [lightMode, toogleDarkMode] as const;
}
export default useMode;
