import { Outlet } from 'react-router-dom';
import { moviesSnap, tvSeriesSnap } from '../lib/firebase-db';
import { DocumentData } from 'firebase/firestore';
import ItemList from '../components/atoms/ListGrid/ItemList';
import MovieBox from '../components/molecules/MovieBox/MovieBox';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner';

const ListPage = ({ type }: { type: string }) => {
  const data = type === 'movies' ? moviesSnap : tvSeriesSnap;
  const arrOfVideos: { key: string; data: DocumentData }[] = [];

  data.forEach((doc) => {
    arrOfVideos.push({ key: doc.id, data: doc.data() });
  });

  return (
    <>
      {arrOfVideos.length > 0 ? (
        <ItemList title={type === 'movies' ? 'Movies' : 'TV Series'}>
          {arrOfVideos.map((movie: any, index: number) => (
            <MovieBox key={index} data={movie.data} uid={movie.key} />
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
