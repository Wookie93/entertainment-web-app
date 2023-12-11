import { useEffect, useState, useMemo } from 'react';
import { trendingMoviesSnap } from '../../../lib/firebase-db';

import TrendingMovieBox from '../../molecules/TrendingMovieBox/TrendingMovieBox';

import { DocumentData } from 'firebase/firestore';

///<div className="bg-bcg-light w-full h-[140px] sm:h-[230px] "></div>

/// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/styles/custom-slider.css';
import { settings } from '../../../assets/config/sliderConfig';
import Slider from 'react-slick';

const Trending = () => {
  const [trending, setTrending] = useState<any>([]);
  const [isReady, setReadyState] = useState(false);

  const trendingArr = useMemo(() => {
    let arr: { key: string; data: DocumentData }[] = [];
    trendingMoviesSnap.forEach((doc) =>
      arr.push({ key: doc.id, data: doc.data() })
    );
    return arr;
  }, [trendingMoviesSnap]);

  useEffect(() => {
    setTrending(trendingArr);
    if (trending.length === trendingArr.length) setReadyState(true);
  }, [trendingArr, trending]);

  return (
    <section className="px-3.5 min-h-[180px] sm:px-0">
      <h2 className="mb-3 sm:mb-6 md:mb-8 lg:mb-6">Trending</h2>
      {isReady ? (
        <Slider {...settings}>
          {trending.map((movie: any, index: number) => (
            <TrendingMovieBox
              key={index}
              index={index}
              data={movie.data}
              uid={movie.key}
              isTrending
              lazyLoading={index >= 2}
            />
          ))}
        </Slider>
      ) : (
        <div className="bg-bcg-light w-full h-[140px] sm:h-[230px] "></div>
      )}
    </section>
  );
};

export default Trending;
