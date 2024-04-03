import { useState } from 'react';
import { useStoreActions } from '../../../store/store';

const AddToFav = ({ uid }: { uid: string }) => {
  const { addFavorites, removeFavorites, checkIfBookmarked } =
    useStoreActions();
  const [isBookmarked, setBookmarkedState] = useState(checkIfBookmarked(uid));

  const manageFavorites = () => {
    if (isBookmarked) {
      setBookmarkedState(false);
      removeFavorites(uid);
    }
    if (!isBookmarked) {
      setBookmarkedState(true);
      addFavorites(uid);
    }
  };

  return (
    <button
      name="favorite"
      aria-label={isBookmarked ? 'Remove from favorites' : 'Add to favorites'}
      className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full z-10 md:top-4 md:right-4 lg:transition lg:hover:bg-black lg:hover:invert lg:top-4 lg:right-6"
      onClick={manageFavorites}
    >
      <img
        src={
          isBookmarked
            ? '../assets/icon-bookmark-full.svg'
            : '../assets/icon-bookmark-empty.svg'
        }
        alt="bookmark button"
        width={12}
        height={14}
      />
    </button>
  );
};

export default AddToFav;
