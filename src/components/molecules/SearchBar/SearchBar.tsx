import { useCombobox } from 'downshift';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAllVideos } from '../../../store/store';
import { MovieBoxProps, MovieBoxPropsArray } from 'interfaces/MovieBoxProps';

const SearchBar = () => {
  const [result, setSearchResult] = useState<string[]>([]);
  const [value, setInputValue] = useState<string>('');
  const [resultVideos, setSearchResultVideos] = useState<MovieBoxPropsArray>();
  const allVideos = useUserAllVideos();
  const navigate = useNavigate();

  const getMatchingMovies = ({
    inputValue,
  }: {
    inputValue: string | undefined;
  }) => {
    const phrase = inputValue?.toLocaleLowerCase() || '';
    const filteredMovies = allVideos.filter((movie: MovieBoxProps) =>
      movie.data.title.toLocaleLowerCase().includes(phrase)
    );
    const newResult = filteredMovies.map(
      (movie: MovieBoxProps) => movie.data.title
    );
    setSearchResult(newResult);
    setSearchResultVideos(filteredMovies);
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox<string>({
    items: result,
    onInputValueChange: ({ inputValue }) => {
      getMatchingMovies({ inputValue });
      setInputValue(inputValue || '');
    },
  });

  const navigateToSearchResult = () => {
    navigate('/search-result', { state: { videos: resultVideos } });
    setInputValue('');
    setSearchResult([]);
  };

  return (
    <div className="flex gap-4 w-full px-4 mb-6 min-h-[20px] sm:px-0 md:mb-10 xl:mb-9">
      <img
        src="../assets/icon-search.svg"
        alt=""
        className="w-[24px] sm:w-auto"
        width={32}
        height={32}
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="text-base pl-1 sm:text-2xl bg-transparent sm:pl-2.5 grow"
          {...getInputProps({ value: value })}
        />
        <ul
          className={`absolute top-8 w-full max-h-[400px] py-2 px-3 overflow-y-scroll bg-bcg-light rounded-md z-50 ${
            !(isOpen && result.length) && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            result.map((item, index) => (
              <li
                key={index}
                className={`my-4 cursor-pointer ${
                  highlightedIndex === index && 'underline'
                }`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
      {result.length > 0 ? (
        <button onClick={navigateToSearchResult}>Search</button>
      ) : null}
    </div>
  );
};

export default SearchBar;
