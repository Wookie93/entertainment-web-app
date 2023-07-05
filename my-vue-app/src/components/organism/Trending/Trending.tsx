import Slider from 'react-slick';
//import { MovieBoxPropsArray } from 'interfaces/MovieBoxProps.tsx';
import MovieBox from '../../molecules/MovieBox/MovieBox';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/styles/custom-slider.css';

const Trending = ({ data }: any) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.48,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1.45,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 310,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  console.log(data);

  return (
    <section className="px-3.5 sm:px-0">
      <h2 className="mb-3 sm:mb-6 md:mb-8 lg:mb-6">Trending</h2>
      <Slider {...settings}>
        {data.map((movie: any, index: number) => (
          <MovieBox key={index} data={movie} />
        ))}
      </Slider>
    </section>
  );
};

export default Trending;
