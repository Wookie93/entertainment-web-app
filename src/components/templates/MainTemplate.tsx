import Navigation from '../organism/Navigation/Navigation';
import SearchBar from '../molecules/SearchBar/SearchBar';

const MainTemplate = ({ children }: any) => {
  return (
    <>
      <div className="overflow-hidden sm:px-6 sm:max-w-[768px] sm:m-auto lg:grid lg:grid-cols-[96px_minmax(825px,_1fr)] lg:max-w-[1440px] lg:gap-9 lg:pl-8">
        <Navigation />
        <main className="lg:mt-16">
          <SearchBar />
          {children}
        </main>
      </div>
    </>
  );
};

export default MainTemplate;
