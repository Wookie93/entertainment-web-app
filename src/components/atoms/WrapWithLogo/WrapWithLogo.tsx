import { NavLink } from 'react-router-dom';

const WrapWithLogo = ({ children }: any) => {
  return (
    <div className="absolute top-[7%] left-1/2 -translate-x-1/2 md:top-[8%] md:translate-y-0">
      <div className="relative left-1/2 -translate-x-1/2 mb-[62px] w-[32px]">
        <NavLink to="/">
          <img src="src/assets/logo.svg" alt="logo" />
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export default WrapWithLogo;
