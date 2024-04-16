import { useEffect, useState } from 'react';

import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ImageWrap from '../../atoms/ProgressiveImage/ProgressiveImage/ImageWrap.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const MovieBox = ({ data, uid }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);

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
      <ImageWrap
        isHovered={isHovered}
        screenWidth={screenWidth}
        imageSmall={data.thumbnail.regular?.small}
        alt={data.title}
        thumbnail={data.thumbnail.none}
      />

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
