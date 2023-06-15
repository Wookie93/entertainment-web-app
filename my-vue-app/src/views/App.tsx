import ItemList from '../components/atoms/ListGrid/ItemList.tsx';
import MovieBox from '../components/atoms/MovieBox/MovieBox.tsx';
import Navigation from '../components/molecules/Navigation/Navigation.tsx';

function App() {
  return (
    <div>
      <Navigation />

      <div className="searchbar flex gap-4 w-full px-4 mb-6">
        <img src="src/assets/icon-search.svg" alt="" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="bg-transparent pl-1"
        />
      </div>

      <body className='px-4'>
      <section className="trending">
        <h2 className='mb-4'>Trending</h2>
        <MovieBox isBig />
      </section>

      <ItemList title='Recommended for you'>
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
      </ItemList>

      </body>
    </div>
  );
}

export default App;
