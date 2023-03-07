import { signOut } from 'next-auth/react';

function UserDropdown() {
  const profile = () => console.warn('not implemented go to profile page');
  const settings = () => console.warn('not implemented go to settings page');
  const logOut = () => signOut();

  return (
    <ul className="dropdown-content w-full bg-background-200">
      <li tabIndex={0} onClick={profile}>
        Profile
      </li>

      <li tabIndex={0} onClick={settings}>
        Settings
      </li>

      <li tabIndex={0} onClick={logOut}>
        Log out
      </li>
    </ul>
  );
}
export default UserDropdown;
