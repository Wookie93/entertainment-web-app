import MovieBox from '../components/molecules/MovieBox/MovieBox';
import ItemList from '../components/atoms/ListGrid/ItemList';
import { MovieBoxProps } from 'interfaces/MovieBoxProps';
import { useUserFavorites } from '../store/store';

const FavouritePage = () => {
  const userFavorites = useUserFavorites();

  return (
    <>
      <ItemList title="Favourites">
        {userFavorites.map((video: MovieBoxProps, index: number) => (
          <MovieBox key={video.key + index} data={video.data} uid={video.key} />
        ))}
      </ItemList>
    </>
  );
};

export default FavouritePage;
