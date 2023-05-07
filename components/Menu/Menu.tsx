import { ReactNode } from 'react';

type Item = {
  item: ReactNode;
  title?: boolean;
  link?: string;
  onClick?: VoidFunction;
};

interface Props {
  items: Item[];
  className?: string;
}

function Menu({ items, className = '' }: Props) {
  return (
    <ul className={`menu rounded bg-neutral text-neutral-content ${className}`}>
      {items.map((item, i) => (
        <MenuItem {...item} key={i} />
      ))}
    </ul>
  );
}

function MenuItem({ item, title, link, onClick }: Item) {
  const menuTitle = <span>{item || <hr />}</span>;
  const menuItem = (
    <a href={link} onClick={onClick} role={onClick ? 'button' : undefined}>
      {item}
    </a>
  );
  return (
    <li tabIndex={0} className={title ? 'menu-title' : ''}>
      {title ? menuTitle : menuItem}
    </li>
  );
}

export default Menu;
