import { signOut } from 'next-auth/react';

function UserDropdown() {
  const settings = () => console.warn('not implemented go to settings page');

  const profile = () => console.warn('not implemented go to profile page');

  const logOut = () => signOut();

  return (
    <div className="absolute w-full bg-background-200">
      <p>Profile</p>
      <p>Settings</p>
      <p onClick={logOut}>Log out</p>
    </div>
  );
}
export default UserDropdown;
