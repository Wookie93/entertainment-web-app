import { Outlet, useLocation } from 'react-router-dom';

const SearchResultPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <p>Search result</p>
      <Outlet />
    </>
  );
};

export default SearchResultPage;
