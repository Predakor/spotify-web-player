import { MdMoreHoriz, MdMoreVert } from 'react-icons/md';

interface Props {
  horizontal?: boolean;
}

function MoreOptionsIcons({ horizontal }: Props) {
  return horizontal ? <MdMoreHoriz /> : <MdMoreVert />;
}
export default MoreOptionsIcons;
