import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

function DropdownIcon({ expanded = false }: { expanded: boolean }) {
  return expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />;
}
export default DropdownIcon;
