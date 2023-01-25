export type DataEntry = {
  href: string;
  text?: string;
  icon?: string;
};

const data: DataEntry[] = [
  { href: '/', text: 'Home', icon: 'HomeIcon' },
  { href: '/library', text: 'Library', icon: 'LibraryIcon' },
  { href: '/statistics', text: 'Statistics', icon: 'StatisticIcon' },
  { href: '/search', text: 'Search', icon: 'SearchIcon' },
];
export default data;
