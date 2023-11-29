import { useEffect, useState } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const TrendingMovieBox = ({ data, uid, lazyLoading }: MovieBoxProps) => {
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
          {data.thumbnail.none === '' ? (
            <img
              className={`rounded-lg object-cover h-[110px] md:h-[140px] lg:h-[173px] ${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              src="../assets/empty-image.svg"
              alt="empty image ico"
              width={470}
              height={230}
              loading={lazyLoading ? 'lazy' : 'eager'}
            />
          ) : (
            <picture>
              <source
                srcSet={data.thumbnail.trending?.small}
                media="(max-width: 640px)"
              />
              <img
                src={data.thumbnail.trending?.large}
                alt={data.title}
                className={`rounded-lg relative w-[240px] sm:w-[470px] md:h-[230px] ${
                  isHovered && screenWidth > 1023 ? 'brightness-50' : ''
                }`}
                width={470}
                height={230}
                loading={lazyLoading ? 'lazy' : 'eager'}
              />
            </picture>
          )}
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
};

export default TrendingMovieBox;
