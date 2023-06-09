import MovieBox from '../components/atoms/MovieBox/MovieBox.tsx';
import Navigation from '../components/molecules/Navigation/Navigation.tsx';
import Slider from 'react-slick';

function App() {
  return (
    <div>
      <Navigation />

      <div className="searchbar flex gap-4 w-full px-4 mb-6">
        <div className="searchbar__ico">
          <img src="src/assets/icon-search.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="searchbar__input bg-transparent pl-1"
        />
      </div>

      <section className="trending">
        <h2>Trending</h2>
        <MovieBox />
      </section>

      <section className="recommended movie-grid ">
        <div className="movie-box--small">
          <button className="movie-box__bookmark">
            <img
              src="src/assets/icon-bookmark-empty.svg"
              alt="bookmark button"
            />
          </button>
          <div className="movie-box__img-wrapper">
            <img
              src="src/assets/thumbnails/the-great-lands/regular/large.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="movie-box__tags">
              <span>2019</span>
              <span>Movie</span>
              <span>PG</span>
            </div>
            <p className="movie-box__title">The Great Lands</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
