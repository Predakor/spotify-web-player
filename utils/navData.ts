import { HomeIcon, LibraryIcon, SearchIcon } from '@icons/NavIcons';

export type NavItemData = {
  href: string;
  text?: string;
  Icon: ({ active }: { active: boolean }) => JSX.Element;
};

export const navItemData: NavItemData[] = [
  { href: '/', text: 'Home', Icon: HomeIcon },
  { href: '/library', text: 'Library', Icon: LibraryIcon },
  { href: '/search', text: 'Search', Icon: SearchIcon },
];
