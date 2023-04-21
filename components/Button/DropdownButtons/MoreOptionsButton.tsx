import { ReactElement } from 'react';
import MoreOptionsIcons from '@icons/MoreOptionsIcons';

interface Props {
  actions: ReactElement;
  className?: string;
}

function MoreOptionsButton({ actions, className }: Props) {
  return (
    <div className={`dropdown ${className}`} tabIndex={0}>
      <button className={`button ${className}`} role="button">
        <MoreOptionsIcons />
      </button>
      <ul tabIndex={0} className="dropdown-content w-24 bg-background-200 ">
        <li>Add</li>
        <li>Remove</li>
        <li>Save</li>
        <li>Dont &apos;t recomend</li>
        <li>report</li>
      </ul>
    </div>
  );
  {
    /* return <DropdownButton onClick={() => 1} expanded={false} />; */
  }
}

export default MoreOptionsButton;
