import MenuItem from '../../atoms/MenuItem/MenuItem';

const Navigation = () => {
  return (
    <nav className="flex bg-bcg-light justify-between items-center p-4 mb-6">
      <div className="w-[25px]">
        <img src="src/assets/logo.svg" alt="logo" />
      </div>
      <ul className="flex gap-6">
        <MenuItem img="src/assets/icon-nav-home.svg" alt="home button" />
        <MenuItem
          img="src/assets/icon-nav-movies.svg"
          alt="movies navigation link"
        />
        <MenuItem img="src/assets/icon-nav-tv-series.svg" alt="home button" />
        <MenuItem img="src/assets/icon-nav-bookmark.svg" alt="home button" />
      </ul>

      <div className="w-[24px] border rounded-full">
        <img src="src/assets/image-avatar.png" alt="bookmark button" />
      </div>
    </nav>
  );
};

export default Navigation;
