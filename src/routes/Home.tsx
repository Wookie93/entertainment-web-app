import { getAllMovies, getTrendingMovies } from '../lib/firebase-db.tsx';

import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/molecules/MovieBox/MovieBox.tsx';
import Trending from '../components/organism/Trending/Trending.tsx';
import SkeletonHomepage from '../skeletons/skeletonHompage.tsx';
import { useLoaderData, Await, defer } from 'react-router-dom';
import { Suspense } from 'react';

export async function loader() {
  async function getData() {
    const videos = await getAllMovies();
    const trendingVideos = await getTrendingMovies();
    const arrOfKeys = [...videos.keys()];
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
  const data = getData();

  return defer({
    data: data,
  });
}

const HomePage = () => {
  const data = useLoaderData() as any;

  console.log(data.data);

  return (
    <>
      <Suspense fallback={<SkeletonHomepage />}>
        <Await resolve={data.data}>
          {(data) => (
            <>
              <Trending data={data.trendingVideos} />
              <ItemList title="Recommended for you">
                {data.randomNumbers.map((value: number) => (
                  <MovieBox
                    key={`${data.arrOfKeys[value]}a`}
                    data={data.videos.get(data.arrOfKeys[value])}
                    uid={data.arrOfKeys[value]}
                  />
                ))}
              </ItemList>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;
