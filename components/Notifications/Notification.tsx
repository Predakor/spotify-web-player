import useNotifications from '@hooks/useNotifications';

interface Props {
  className?: string;
}

function Notifications({ className = '' }: Props) {
  const [notifications] = useNotifications();
  return (
    <div className={`toast-center toast ${className}`}>
      {notifications.map(({ message, type }) => {
        const notifcationType =
          type === 'succes' ? 'alert-succes' : 'alert-error';

        return (
          <div
            className={`alert ${notifcationType} shadow-sm shadow-base-300`}
            key={message}
          >
            <span className="">{message}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
