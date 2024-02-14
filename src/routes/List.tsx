import { getTVSnap, getMovieSnap } from '../lib/firebase-db';
import ItemList from '../components/atoms/ListGrid/ItemList';
import MovieBox from '../components/molecules/MovieBox/MovieBox';

import { useLoaderData } from 'react-router-dom';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const urlPathname = url.pathname;
  let videos = null;
  if (urlPathname.includes('movies')) videos = await getMovieSnap();
  if (urlPathname.includes('tv-series')) videos = await getTVSnap();

  return { videos, urlPathname };
}

const ListPage = () => {
  const { videos, urlPathname } = useLoaderData() as any;

  return (
    <>
      <ItemList title={urlPathname.includes('movies') ? 'Movies' : 'TV Series'}>
        {videos.map((movie: any, index: number) => (
          <MovieBox
            key={index}
            data={movie.data}
            uid={movie.key}
            lazyLoading={index >= 3}
          />
        ))}
      </ItemList>
    </>
  );
};

export default ListPage;
