import { localSaved } from 'types/localStorage';

const getLocal = (key: localSaved) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const getLocalVolume = () => parseInt(getLocal('volume') ?? '50');

export { getLocalVolume };
export default getLocal;
