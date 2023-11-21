import { useEffect, useState } from 'react';
import { trendingMoviesSnap } from '../../../lib/firebase-db';

import Slider from 'react-slick';
import MovieBox from '../../molecules/MovieBox/MovieBox';

import { DocumentData } from 'firebase/firestore';

/// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/styles/custom-slider.css';

const Trending = () => {
  const [trending, setTrending] = useState<any>([]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.48,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 652,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 364,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 304,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    let trendingArr: { key: string; data: DocumentData }[] = [];
    trendingMoviesSnap.forEach((doc) =>
      trendingArr.push({ key: doc.id, data: doc.data() })
    );

    setTrending(trendingArr);
  }, [trendingMoviesSnap]);

  return (
    <section className="px-3.5 sm:px-0">
      <h2 className="mb-3 sm:mb-6 md:mb-8 lg:mb-6">Trending</h2>
      <div>
        {trending.length > 0 ? (
          <Slider {...settings}>
            {trending.map((movie: any, index: number) => (
              <MovieBox
                key={index}
                data={movie.data}
                uid={movie.key}
                isTrending
              />
            ))}
          </Slider>
        ) : (
          <div className="w-[240px] h-[140px] sm:w-[470px] sm:h-[230px] "></div>
        )}
      </div>
    </section>
  );
};

export default Trending;
