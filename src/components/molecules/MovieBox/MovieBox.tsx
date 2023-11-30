import { useEffect, useState } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ProgressiveImg from '../../atoms/ProgressiveImage/ProgressiveImage/ProgressiveImage.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const MovieBox = ({ data, uid, lazyLoading }: MovieBoxProps) => {
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
      className="max-w-[164px] sm:max-w-[220px] lg:max-w-[280px] relative rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AddToFav uid={uid} />
      <div className="relative">
        {isHovered && screenWidth > 1023 ? <PlayButton /> : null}
        <a href="#">
          {data.thumbnail.none === '' ? (
            <img
              className={`rounded-lg object-cover h-[110px] md:h-[140px] lg:h-[173px]	${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              src="../assets/empty-image.svg"
              alt="empty image ico"
              width={278}
              height={170}
              loading={lazyLoading ? 'lazy' : 'eager'}
            />
          ) : (
            <ProgressiveImg
              image={data.thumbnail.regular?.large}
              classname={`rounded-lg min-h-[110px] ${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              placeholderClassname="h-[173px] w-[280px] max-w-[164px] sm:max-w-[220px] lg:max-w-[280px] lg:max-h-[173px]"
              alt={data.title}
              width={278}
              height={170}
            />
          )}
        </a>
      </div>
      <div className="mt-1 min-h-[40px]">
        <TagsList year={year | 0} rating={rating} category={category} />
        <a className="leading-[19px] text-sm md:text-lg" href="#">
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default MovieBox;
