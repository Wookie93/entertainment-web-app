import { useEffect, useState } from 'react';

import {
  checkIfBookmarked,
  addMoviesToCollection,
  removeMoviesFromCollection,
} from '../../../lib/firebase-bookmarked';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ProgressiveImg from '../../atoms/ProgressiveImage/ProgressiveImage/ProgressiveImage.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const MovieBox = ({ data, uid, lazyLoading }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);
  const [isBookmarked, setBookmarkedState] = useState(checkIfBookmarked(uid));

  if (!data) return;
  const { year, rating, category } = data;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, [screenWidth]);

  const manageBookmarkedStaus = () => {
    setBookmarkedState(checkIfBookmarked(uid));
  };

  const addToFav = () => {
    addMoviesToCollection(uid);
    setBookmarkedState(true);
  };

  const removeFromFav = () => {
    removeMoviesFromCollection(uid);
    setBookmarkedState(false);
  };

  // useEffect(() => {
  //   setBookmarkedState(checkIfBookmarked(uid));
  // }, []);

  return (
    <div
      className="max-w-[164px] sm:max-w-[220px] lg:max-w-[280px] relative rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-uid={uid}
    >
      <AddToFav
        isBookmarked={isBookmarked}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
      />
      <div className="relative">
        {isHovered && screenWidth > 1023 ? <PlayButton /> : null}
        <a href="#">
          <ProgressiveImg
            image={data.thumbnail.regular?.small}
            classname={`rounded-lg min-h-[110px] object-cover aspect-[1.5/1] md:aspect-[1.6/1] ${
              isHovered && screenWidth > 1023 ? 'brightness-50' : ''
            }`}
            alt={data.title}
            width={278}
            height={170}
            thumbnail={data.thumbnail.none}
            lazyLoading={lazyLoading}
          />
        </a>
      </div>
      <div className="mt-1 min-h-[40px]">
        <TagsList year={year} rating={rating} category={category} />
        <a className="leading-[19px] text-sm md:text-lg" href="#">
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default MovieBox;
