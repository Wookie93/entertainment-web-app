import { useEffect, useState, memo } from 'react';

import PlayButton from '../../atoms/PlayButton/PlayButton.tsx';
import AddToFav from '../../atoms/AddToFav/AddToFav.tsx';
import TagsList from '../TagsList/TagsList.tsx';
import ProgressiveImg from '../../atoms/ProgressiveImage/ProgressiveImage/ProgressiveImage.tsx';

import { MovieBoxProps } from 'interfaces/MovieBoxProps.tsx';

const TrendingMovieBox = memo(({ data, uid, index }: MovieBoxProps) => {
  const [isHovered, setHover] = useState(false);
  const [screenWidth, setWidth] = useState(window.innerWidth);
  const [preloadedImg, setPreloadedImg] = useState<any>();

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, [screenWidth]);

  console.log(index);

  useEffect(() => {
    if (index === 0) {
      const img = (new Image().src = data.thumbnail.trending?.large || '');
      setPreloadedImg(img);
    }
  }, [preloadedImg]);

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
          {index! > 0 ? (
            <ProgressiveImg
              image={data.thumbnail.trending?.large}
              classname={`rounded-lg relative object-cover w-full aspect-[2] ${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              alt={data.title}
              width={470}
              height={230}
              thumbnail={data.thumbnail.none}
            />
          ) : (
            <img
              src={preloadedImg}
              className={`rounded-lg relative object-cover w-full aspect-[2] test ${
                isHovered && screenWidth > 1023 ? 'brightness-50' : ''
              }`}
              alt="image"
              width={470}
              height={230}
              rel="preload"
            />
          )}
        </a>
      </div>
      <div className="absolute bottom-4 left-4 min-h-[40px] md:bottom-6 md:left-6 lg:bottom-5 lg:left-6">
        <TagsList
          year={data.year}
          rating={data.rating}
          category={data.category}
        />
        <a className="leading-[19px] md:text-2xl" href="#">
          {data.title}
        </a>
      </div>
    </div>
  );
});

export default TrendingMovieBox;
