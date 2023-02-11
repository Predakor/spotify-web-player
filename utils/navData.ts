export type DataEntry = {
  href: string;
  text?: string;
  icon: 'HomeIcon' | 'LibraryIcon' | 'SearchIcon' | 'StatisticIcon';
};

const data: DataEntry[] = [
  { href: '/', text: 'Home', icon: 'HomeIcon' },
  { href: '/library', text: 'Library', icon: 'LibraryIcon' },
  { href: '/statistics', text: 'Statistics', icon: 'StatisticIcon' },
  { href: '/search', text: 'Search', icon: 'SearchIcon' },
];
export default data;
