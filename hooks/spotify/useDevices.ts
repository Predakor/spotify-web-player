import { useCallback, useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useDeviceControls } from './controls';

export type Device = SpotifyApi.UserDevice;
function useDevices() {
  const { getDevices } = useDeviceControls();
  const [fetchedDevices, actions] = useFetchedValue<Device[]>();

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = useCallback(async () => {
    try {
      const request = await getDevices();
      actions.fetchSucces(request);
    } catch (error) {
      actions.fetchFail(`${error}`);
    }
  }, []);

  return [fetchedDevices, fetchDevices] as const;
}

export default useDevices;
