import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';

export interface Notification {
  type: 'succes' | 'error';
  message: string;
  timeout: number;
}
const initialState: Notification[] = [];

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    setNotification: (state, action: { payload: Notification }) => {
      state.unshift(action.payload);
      if (state.length > 3) {
        state.pop();
      }
    },
    removeNotification: (state, action: { payload: string }) => {
      return state.filter(({ message }) => message !== action.payload);
    },
  },
});

const selectNotification = (state: AppState) => state.notification;

export { selectNotification };
export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
