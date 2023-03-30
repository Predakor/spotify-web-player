import { localSaved } from 'types/localStorage';

const setLocal = (key: localSaved, item: string) => {
  localStorage.setItem(key, item);
};

const setLocalVolume = (volume: number) => {
  if (volume < 0) volume = 0;
  if (volume > 100) volume = 100;
  setLocal('volume', volume.toString());
};

export { setLocalVolume };
export default setLocal;
