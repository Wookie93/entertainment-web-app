import { useEffect, useState } from 'react';
import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/molecules/MovieBox/MovieBox';
import Trending from '../components/organism/Trending/Trending.tsx';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);

  const getData = () => {
    fetch('src/assets/data/data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    if (data) {
      setTrending(data.filter((movie: any) => movie.isTrending));
      setMovies(data.filter((movie: any) => !movie.isTrending));
    }
  }, []);

  return (
    <>
      <Trending data={trending} />

      <ItemList title="Recommended for you">
        {movies.map((movie: any, index: number) => (
          <MovieBox key={index} data={movie} />
        ))}
      </ItemList>
    </>
  );
};

export default HomePage;
