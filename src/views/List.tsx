import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { moviesSnap, tvSeriesSnap } from '../lib/firebase-db';
import { DocumentData } from 'firebase/firestore';
import ItemList from '../components/atoms/ListGrid/ItemList';
import MovieBox from '../components/molecules/MovieBox/MovieBox';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner';

const ListPage = ({ type }: { type: string }) => {
  const data = type === 'movies' ? moviesSnap : tvSeriesSnap;

  const arrOfVideos = useMemo((): { key: string; data: DocumentData }[] => {
    const result: { key: string; data: DocumentData }[] = [];
    data.forEach((doc: DocumentData) => {
      result.push({
        key: doc.id,
        data: doc.data(),
      });
    });
    return result;
  }, [data]);

  return (
    <>
      {arrOfVideos.length > 0 ? (
        <ItemList title={type === 'movies' ? 'Movies' : 'TV Series'}>
          {arrOfVideos.map((movie: any, index: number) => (
            <MovieBox
              key={index}
              data={movie.data}
              uid={movie.key}
              lazyLoading={index >= 3}
            />
          ))}
        </ItemList>
      ) : (
        <LoadingSpinner />
      )}
      <Outlet />
    </>
  );
};

export default ListPage;
