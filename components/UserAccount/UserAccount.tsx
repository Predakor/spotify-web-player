import { useSession } from 'next-auth/react';

function UserAccount() {
  const { data: session } = useSession();
  if (session?.user) {
    const user = session.user;
    return <div>{user.name}</div>;
  }
  return <></>;
}
export default UserAccount;
