import { useEffect, useState } from 'react';
import { getLocalVolume } from '@utils/getLocalValue';

function useDeviceVolume({ volume_percent }: SpotifyApi.UserDevice) {
  const [volume, setVolume] = useState(volume_percent ?? getLocalVolume());

  useEffect(() => {
    if (volume_percent) setVolume(volume_percent ?? getLocalVolume());
  }, [volume_percent]);

  return volume;
}
export default useDeviceVolume;
