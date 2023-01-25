import {
  MdHome,
  MdOutlineHome,
  MdLibraryMusic,
  MdOutlineLibraryMusic,
  MdAnalytics,
  MdOutlineAnalytics,
  MdSearch,
  MdSavedSearch,
} from 'react-icons/md';

function HomeIcon({ active }: { active: boolean }) {
  return active ? <MdHome /> : <MdOutlineHome />;
}
function LibraryIcon({ active }: { active: boolean }) {
  return active ? <MdLibraryMusic /> : <MdOutlineLibraryMusic />;
}
function StatisticIcon({ active }: { active: boolean }) {
  return active ? <MdAnalytics /> : <MdOutlineAnalytics />;
}
function SearchIcon({ active }: { active: boolean }) {
  return active ? <MdSavedSearch /> : <MdSearch />;
}
const NavIcons = { HomeIcon, LibraryIcon, StatisticIcon, SearchIcon };
export default NavIcons;
export { HomeIcon, LibraryIcon, StatisticIcon, SearchIcon };
