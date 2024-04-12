import { useEffect, useState } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ProgressiveImg from '../../atoms/ProgressiveImage/ProgressiveImage/ProgressiveImage.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const MovieBox = ({ data, uid, lazyLoading }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);

  // if (!data) return;

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
      data-uid={uid}
    >
      <AddToFav uid={uid} />
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
        <TagsList
          year={data?.year}
          rating={data?.rating}
          category={data?.category}
        />
        <a className="leading-[19px] text-sm md:text-lg" href="#">
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default MovieBox;
