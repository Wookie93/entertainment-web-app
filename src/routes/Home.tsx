import { getTrendingMovies } from '../lib/firebase-db.tsx';

import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/molecules/MovieBox/MovieBox.tsx';
import Trending from '../components/organism/Trending/Trending.tsx';
import SkeletonHomepage from '../skeletons/skeletonHompage.tsx';
import { useLoaderData, Await, defer } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import { useUserStore } from '../store/store.tsx';
import { getRandomVideosArray } from '../helpers/helpers.tsx';

export async function loader() {
  async function getData() {
    const trendingVideos = await getTrendingMovies();
    return trendingVideos;
  }
  const data = getData();

  return defer({
    data,
  });
}

const HomePage = () => {
  const data = useLoaderData() as any;
  const { allVideos } = useUserStore();

  const recommendedVideos = useMemo(
    () => getRandomVideosArray(24, allVideos),
    [allVideos]
  );

  return (
    <>
      <Suspense fallback={<SkeletonHomepage />}>
        <Await resolve={data.data}>
          {(data) => (
            <>
              <Trending data={data} />
              <ItemList title="Recommended for you">
                {recommendedVideos.map((video) => (
                  <MovieBox
                    key={`${video.key}a`}
                    data={video.data}
                    uid={video.key}
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
