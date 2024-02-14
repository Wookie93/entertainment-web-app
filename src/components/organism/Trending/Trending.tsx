import TrendingMovieBox from '../../molecules/TrendingMovieBox/TrendingMovieBox';

/// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/styles/custom-slider.css';
import { settings } from '../../../assets/config/sliderConfig';
import Slider from 'react-slick';

const Trending = ({ data }: { data: [] }) => {
  return (
    <section className="px-3.5 min-h-[180px] sm:px-0">
      <h2 className="mb-3 sm:mb-6 md:mb-8 lg:mb-6">Trending</h2>
      <Slider {...settings}>
        {data.map((movie: any, index: number) => (
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
    </section>
  );
};

export default Trending;
