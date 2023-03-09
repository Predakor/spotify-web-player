import {
  MdHome,
  MdOutlineHome,
  MdLibraryMusic,
  MdOutlineLibraryMusic,
  MdSearch,
  MdSavedSearch,
} from 'react-icons/md';

export function HomeIcon({ active }: { active: boolean }) {
  return active ? <MdHome /> : <MdOutlineHome />;
}
export function LibraryIcon({ active }: { active: boolean }) {
  return active ? <MdLibraryMusic /> : <MdOutlineLibraryMusic />;
}
export function SearchIcon({ active }: { active: boolean }) {
  return active ? <MdSavedSearch /> : <MdSearch />;
}
