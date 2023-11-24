import { useAuth } from '../../../lib/firebase-auth';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import Menu from '../../molecules/Menu/Menu';

const Navigation = () => {
  const { user } = useAuth();

  return (
    <nav className="flex bg-bcg-light justify-between items-center p-4 mb-6 min-h-[56px] sm:mt-6 sm:p-5 sm:rounded-[10px] md:px-6 md:py-5 md:mb-7 lg:max-h-[960px] lg:h-screen lg:p-9 lg:flex-col lg:mt-8 lg:justify-start lg:rounded-[20px]">
      <div className="w-[25px] md:w-[32px]">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <Menu />

      {!user ? (
        <div className="lg:mt-auto">
          <MenuItem link="/login" text="Sign In" />
        </div>
      ) : (
        <div className="w-[24px] h-[24px] border rounded-full md:w-[34px] md:h-[34px] lg:w-[42px] lg:h-[42px] lg:mt-auto">
          <img
            className="h-full rounded-full"
            src={user.photoURL ? user.photoURL : '../assets/image-avatar.png'}
            alt="user profile image"
          />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
