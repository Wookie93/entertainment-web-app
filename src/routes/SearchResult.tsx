import { MovieBoxProps } from 'interfaces/MovieBoxProps';
import { Outlet, useLocation } from 'react-router-dom';
import ItemList from '../components/atoms/ListGrid/ItemList';
import MovieBox from '../components/molecules/MovieBox/MovieBox';

const SearchResultPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <ItemList title="Search result">
        {state.videos.map((movie: MovieBoxProps) => (
          <MovieBox key={`${movie.key}a`} data={movie.data} uid={movie.key} />
        ))}
      </ItemList>
      <Outlet />
    </>
  );
};

export default SearchResultPage;
