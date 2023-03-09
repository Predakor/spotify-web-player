import NavItems from './NavItems';

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="btm-nav static" aria-label="primary">
      <NavItems activePage={pathname} />
    </nav>
  );
}
export default MobileNav;
