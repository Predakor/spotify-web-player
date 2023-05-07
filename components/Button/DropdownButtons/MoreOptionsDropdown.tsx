import { ReactElement } from 'react';
import Menu from '@components/Menu/Menu';
import MoreOptionsIcons from '@icons/MoreOptionsIcons';
import Button from '../Button';

interface Props {
  actions: ReactElement;
  className?: string;
}

function MoreOptionsDropdown({ actions, className }: Props) {
  return (
    <div className={`dropdown ${className}`}>
      <Button className="hover:bg-inherit">
        <MoreOptionsIcons />
      </Button>

      <Menu
        className="dropdown-content"
        items={[
          { item: 'Add' },
          { item: 'Remove' },
          { item: 'Save' },
          { item: '', title: true },
          { item: "Don't recomend" },
          { item: 'report' },
        ]}
      />
    </div>
  );
}

export default MoreOptionsDropdown;
