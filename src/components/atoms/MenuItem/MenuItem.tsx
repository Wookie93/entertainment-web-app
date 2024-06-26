import { NavLink } from 'react-router-dom';
import { MenuItemProps } from '../../../../interfaces/ComponentsProps';

const MenuItem = ({ img, alt, link, text }: MenuItemProps) => {
  return (
    <li
      className={`w-[16px] list-none cursor-pointer md:w-[20px] lg:transition lg:hover:brightness-0 lg:hover:invert ${
        !img ? 'w-[auto] md:w-[auto] lg:w-[50px]' : ''
      }`}
    >
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? 'brightness-0 invert' : '')}
        test-id="nav-link"
        aria-label={`link to ${link.slice(1)} page`}
      >
        {img ? (
          <img src={img} alt={alt} width={20} height={20} />
        ) : (
          <p>{text}</p>
        )}
      </NavLink>
    </li>
  );
};

export default MenuItem;
