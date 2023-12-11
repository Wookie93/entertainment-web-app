import { trendingMoviesSnap, videosDB } from '../lib/firebase-db.tsx';

import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/molecules/MovieBox/MovieBox';
import Trending from '../components/organism/Trending/Trending.tsx';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const arrOfKeys = [...videosDB.keys()];

  const randomIndex = () => {
    const randomNumbers: number[] = [];
    const count = arrOfKeys.length >= 24 ? 24 : arrOfKeys.length;

    while (randomNumbers.length < count) {
      const randomNumber =
        Math.floor(Math.random() * (arrOfKeys.length - 0 + 1)) + 0;
      if (!randomNumbers!.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    return randomNumbers;
  };
  //<div className="bg-bcg-light w-full h-[180px]"></div>
  const arrOfIndexes = randomIndex();

  console.log(trendingMoviesSnap.docs.length);
  return (
    <>
      <Trending />
      <ItemList title="Recommended for you">
        {arrOfIndexes.map((value, index) =>
          index < 3 ? (
            <MovieBox
              key={index}
              data={videosDB.get(arrOfKeys[value])}
              uid={arrOfKeys[value]}
            />
          ) : (
            <MovieBox
              key={index}
              data={videosDB.get(arrOfKeys[value])}
              uid={arrOfKeys[value]}
              lazyLoading
            />
          )
        )}
      </ItemList>
      <Outlet />
    </>
  );
};

export default HomePage;
