import { HomeIcon, LibraryIcon, SearchIcon } from '@icons/NavIcons';

export type NavItemData = {
  href: string;
  text: string;
  Icon?: ({ active }: { active: boolean }) => JSX.Element;
};

export const navItemData: NavItemData[] = [
  { href: '/', text: 'Home', Icon: HomeIcon },
  { href: '/library/playlists', text: 'Library', Icon: LibraryIcon },
  { href: '/search', text: 'Search', Icon: SearchIcon },
];

export const libraryNavData: NavItemData[] = [
  { href: '/library/playlists', text: 'Playlists' },
  { href: '/library/podcasts', text: 'Podcasts' },
  { href: '/library/artists', text: 'Artists' },
  { href: '/library/albums', text: 'Albums' },
];
