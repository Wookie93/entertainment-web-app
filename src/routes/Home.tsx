import { getAllMovies, getTrendingMovies } from '../lib/firebase-db.tsx';

import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/molecules/MovieBox/MovieBox.tsx';
import Trending from '../components/organism/Trending/Trending.tsx';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const videos = await getAllMovies();
  const trendingVideos = await getTrendingMovies();
  const arrOfKeys: number[] = [...videos.keys()];
  const randomNumbers: number[] = [];
  const count = arrOfKeys.length >= 24 ? 24 : arrOfKeys.length;

  while (randomNumbers.length < count) {
    const randomNumber =
      Math.floor(Math.random() * (arrOfKeys.length - 0 + 1)) + 0;
    if (!randomNumbers!.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return { randomNumbers, arrOfKeys, videos, trendingVideos };
}

const HomePage = () => {
  const { videos, randomNumbers, arrOfKeys, trendingVideos } =
    useLoaderData() as any;

  return (
    <>
      <Trending data={trendingVideos} />
      <ItemList title="Recommended for you">
        {randomNumbers.map((value: number) => (
          <MovieBox
            key={`${arrOfKeys[value]}a`}
            data={videos.get(arrOfKeys[value])}
            uid={arrOfKeys[value]}
          />
        ))}
      </ItemList>
    </>
  );
};

export default HomePage;
