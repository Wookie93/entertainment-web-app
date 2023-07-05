import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  img: string;
  alt: string;
  link: string;
  active?: boolean;
}

const MenuItem = ({ img, alt, link }: MenuItemProps) => {
  return (
    <li
      className={`w-[16px] cursor-pointer md:w-[20px] lg:transition lg:hover:brightness-0 lg:hover:invert`}
    >
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? 'brightness-0 invert' : '')}
      >
        <img src={img} alt={alt} />
      </NavLink>
    </li>
  );
};

export default MenuItem;
