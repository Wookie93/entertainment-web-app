import { useEffect, useState } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const MovieBox = ({ data, uid, isTrending = false }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);

  if (!data) return;
  const { year = 2020, rating = 'PB', category = 'Movie' } = data;
  console.log(data.thumbnail);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, [screenWidth]);

  return (
    <div
      className={
        isTrending
          ? 'relative rounded-lg w-[240px] sm:w-[470px] '
          : 'max-w-[164px] sm:max-w-[220px] lg:max-w-[280px] relative rounded-lg '
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AddToFav uid={uid} />
      <div className="relative">
        {isHovered && screenWidth > 1023 ? <PlayButton /> : null}
        <a href="#">
          {data.thumbnail.none === '' ? (
            <img
              className={`rounded-lg ${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              src="src/assets/empty-image.svg"
              alt="empty image ico"
            />
          ) : (
            <picture>
              <source
                srcSet={
                  isTrending
                    ? data.thumbnail.trending?.small
                    : data.thumbnail.regular?.small
                }
                media="(max-width: 640px)"
              />
              {!isTrending ? (
                <source
                  srcSet={data.thumbnail.regular?.medium}
                  media="(max-width: 1024px)"
                />
              ) : null}
              <img
                src={
                  isTrending
                    ? data.thumbnail.trending?.large
                    : data.thumbnail.regular?.large
                }
                alt={data.title}
                className={`rounded-lg ${
                  isTrending
                    ? 'relative w-[240px] rounded-lg sm:w-[470px] md:h-[230px]'
                    : 'min-h-[110px]'
                } ${isHovered && screenWidth > 1023 ? 'brightness-50' : ''}`}
              />
            </picture>
          )}
        </a>
      </div>
      <div
        className={
          isTrending
            ? 'absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-5 lg:left-6'
            : 'mt-1'
        }
      >
        <TagsList year={year | 0} rating={rating} category={category} />
        <a
          className={`leading-[19px] ${
            isTrending ? 'md:text-2xl' : 'text-sm md:text-lg'
          }`}
          href="#"
        >
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default MovieBox;
