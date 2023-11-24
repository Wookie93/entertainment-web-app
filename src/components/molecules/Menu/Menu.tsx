import MenuItem from '../../atoms/MenuItem/MenuItem';

const Menu = () => {
  return (
    <>
      <ul className="flex gap-6 md:gap-8 md:ml-5 lg:ml-0 lg:flex-col lg:mt-[75px] lg:gap-10">
        <MenuItem
          link="/"
          img="../assets/icon-nav-home.svg"
          alt="home button"
          active
        />
        <MenuItem
          link="/movies"
          img="../assets/icon-nav-movies.svg"
          alt="movies navigation link"
        />
        <MenuItem
          link="/tv-series"
          img="../assets/icon-nav-tv-series.svg"
          alt="home button"
        />
        <MenuItem
          link="/favourites"
          img="../assets/icon-nav-bookmark.svg"
          alt="home button"
        />
      </ul>
    </>
  );
};

export default Menu;
