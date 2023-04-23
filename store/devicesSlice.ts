import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';

type Device = SpotifyApi.UserDevice;
export type deviceState = {
  activeDevice: string;
  thisDevice: string;
  connectedDevices: Device[] | undefined;
};

const initialState: deviceState = {
  activeDevice: '',
  thisDevice: '',
  connectedDevices: undefined,
};

export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: { payload: Device[] }) => {
      state.connectedDevices = action.payload;
    },
    setThisDevice: (state, action: { payload: string }) => {
      state.thisDevice = action.payload;
    },
    setActiveDevice: (state, action: { payload: string }) => {
      state.activeDevice = action.payload;
    },
  },
});

const selectDeviceByID = (devices: Device[], id: string) => {
  return devices.find((device) => (device.id = id));
};
const selectDevices = (state: AppState) => state.devices;

const selectActiveDevice = createSelector([selectDevices], (devices) => {
  const { activeDevice, connectedDevices } = devices;
  return connectedDevices?.find((device) => device.id === activeDevice);
});
const selectThisDevice = createSelector([selectDevices], (devices) => {
  const { thisDevice, connectedDevices } = devices;
  return connectedDevices?.find((device) => device.id === thisDevice);
});

export {
  selectDevices,
  selectDeviceByID,
  selectThisDevice,
  selectActiveDevice,
};
export const { setDevices, setThisDevice, setActiveDevice } =
  devicesSlice.actions;
export default devicesSlice.reducer;
