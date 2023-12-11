import { useEffect, useState, memo } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ProgressiveImg from '../../atoms/ProgressiveImage/ProgressiveImage/ProgressiveImage.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const TrendingMovieBox = memo(({ data, uid, lazyLoading }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);

  if (!data) return;
  const { year = 2020, rating = 'PB', category = 'Movie' } = data;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, [screenWidth]);

  return (
    <div
      className="relative rounded-lg w-[240px] sm:w-[470px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AddToFav uid={uid} />
      <div className="relative">
        {isHovered && screenWidth > 1023 ? <PlayButton /> : null}
        <a href="#">
          <ProgressiveImg
            image={data.thumbnail.trending?.large}
            classname={`rounded-lg relative object-cover w-full aspect-[2] ${
              isHovered && screenWidth > 1023 ? 'brightness-50' : ''
            }`}
            alt={data.title}
            width={470}
            height={230}
            thumbnail={data.thumbnail.none}
            lazyLoading={lazyLoading}
          />
        </a>
      </div>
      <div className="absolute bottom-4 left-4 min-h-[40px] md:bottom-6 md:left-6 lg:bottom-5 lg:left-6">
        <TagsList year={year | 0} rating={rating} category={category} />
        <a className="leading-[19px] md:text-2xl" href="#">
          {data.title}
        </a>
      </div>
    </div>
  );
});

export default TrendingMovieBox;
