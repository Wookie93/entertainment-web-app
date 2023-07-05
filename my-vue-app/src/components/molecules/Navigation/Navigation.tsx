import MenuItem from '../../atoms/MenuItem/MenuItem';

const Navigation = () => {
  return (
    <nav className="flex bg-bcg-light justify-between items-center p-4 mb-6 sm:mt-6 sm:p-5 sm:rounded-[10px] md:px-6 md:py-5 md:mb-7 lg:max-h-[960px] lg:h-screen lg:p-9 lg:flex-col lg:mt-8 lg:justify-start lg:rounded-[20px]">
      <div className="w-[25px] md:w-[32px]">
        <img src="src/assets/logo.svg" alt="logo" />
      </div>
      <ul className="flex gap-6 md:gap-8 md:ml-5 lg:ml-0 lg:flex-col lg:mt-[75px] lg:gap-10">
        <MenuItem
          link="/"
          img="src/assets/icon-nav-home.svg"
          alt="home button"
          active
        />
        <MenuItem
          link="/movies"
          img="src/assets/icon-nav-movies.svg"
          alt="movies navigation link"
        />
        <MenuItem
          link="/tv-series"
          img="src/assets/icon-nav-tv-series.svg"
          alt="home button"
        />
        <MenuItem
          link="/favourites"
          img="src/assets/icon-nav-bookmark.svg"
          alt="home button"
        />
      </ul>

      <div className="w-[24px] border rounded-full md:w-[34px] lg:w-[42px] lg:mt-auto">
        <img src="src/assets/image-avatar.png" alt="bookmark button" />
      </div>
    </nav>
  );
};

export default Navigation;
