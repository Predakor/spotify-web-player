import {
  Notification,
  removeNotification,
  selectNotification,
  setNotification,
} from '@store/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';

function useNotifications() {
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const addNotification = ({
    message,
    type,
  }: Omit<Notification, 'timeout'>) => {
    const timeout = 3000;
    const newNotification = { message, type, timeout };

    dispatch(setNotification(newNotification));

    //remove notification after timeout
    setTimeout(() => {
      dispatch(removeNotification(message));
    }, timeout);
  };

  return [notifications, addNotification] as const;
}
export default useNotifications;
