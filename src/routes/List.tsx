import { getTVSnap, getMovieSnap } from '../lib/firebase-db';
import ItemList from '../components/atoms/ListGrid/ItemList';
import MovieBox from '../components/molecules/MovieBox/MovieBox';

import { useLoaderData, Await, defer } from 'react-router-dom';
import { SkeletonList } from '../skeletons/skeletonList';
import { Suspense } from 'react';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const urlPathname = url.pathname;

  const getData = async () => {
    let videos = null;
    if (urlPathname.includes('movies')) videos = await getMovieSnap();
    if (urlPathname.includes('tv-series')) videos = await getTVSnap();

    return { videos, urlPathname };
  };

  const data = getData();
  return defer({
    data,
  });
}

const ListPage = () => {
  const data = useLoaderData() as any;

  return (
    <>
      <Suspense fallback={<SkeletonList />}>
        <Await resolve={data.data}>
          {(data) => (
            <ItemList
              title={
                data.urlPathname.includes('movies') ? 'Movies' : 'TV Series'
              }
            >
              {data.videos.map((movie: any, index: number) => (
                <MovieBox
                  key={movie.key + index}
                  data={movie.data}
                  uid={movie.key}
                  lazyLoading={index >= 3}
                />
              ))}
            </ItemList>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default ListPage;
