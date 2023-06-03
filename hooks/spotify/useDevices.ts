import { useCallback, useEffect } from 'react';
import useFetchedValue from '@hooks/fetch/useFetchedValue';
import { useDeviceControls } from './controls';

export type Device = SpotifyApi.UserDevice;
function useDevices() {
  const { getDevices } = useDeviceControls();
  const [devices, actions] = useFetchedValue<Device[]>();

  const fetchDevices = useCallback(async () => {
    try {
      const request = await getDevices();
      actions.fetchSucces(request as Device[]);
    } catch (error) {
      actions.fetchFail(`${error}`);
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, []);

  return [devices, fetchDevices] as const;
}

export default useDevices;
