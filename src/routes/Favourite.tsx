import { videosDB } from '../lib/firebase-db';
import { getBookmarkRef } from '../lib/firebase-bookmarked';
import MovieBox from '../components/molecules/MovieBox/MovieBox';
import ItemList from '../components/atoms/ListGrid/ItemList';
import { useEffect, useState } from 'react';

const FavouritePage = () => {
  const [bookmarkedCollection, setBookmarkedCollection] = useState<string[]>(
    []
  );

  const bookmarkedVideos = [...videosDB].filter(([k]) =>
    bookmarkedCollection.includes(k)
  );

  useEffect(() => {
    getBookmarkRef().then((result: string[]) => {
      setBookmarkedCollection(result);
    });
  }, []);

  return (
    <>
      <ItemList title="Favourites">
        {bookmarkedVideos.map((video) => (
          <MovieBox key={video[0]} data={video[1]} uid={video[0]} />
        ))}
      </ItemList>
    </>
  );
};

export default FavouritePage;
