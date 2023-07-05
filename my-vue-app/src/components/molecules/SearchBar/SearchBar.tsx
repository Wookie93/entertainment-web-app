const SearchBar = () => {
  return (
    <div className="flex gap-4 w-full px-4 mb-6 sm:px-0 md:mb-10 xl:mb-9">
      <img
        src="src/assets/icon-search.svg"
        alt=""
        className="w-[24px] sm:w-auto"
      />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="text-base sm:text-2xl bg-transparent sm:pl-2.5 grow"
      />
    </div>
  );
};

export default SearchBar;
