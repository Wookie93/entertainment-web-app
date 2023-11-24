import { useEffect, useState } from 'react';
import {
  addMoviesToCollection,
  checkIfBookmarked,
} from '../../../lib/firebase-bookmarked';

const AddToFav = ({ uid }: { uid: string }) => {
  const [ifBookmarked, setBookmarkedState] = useState(false);
  const addToFav = () => {
    addMoviesToCollection(uid);
  };

  useEffect(() => {
    setBookmarkedState(checkIfBookmarked(uid));
  }, []);

  return (
    <button
      className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full z-10 md:top-4 md:right-4 lg:transition lg:hover:bg-black lg:hover:invert lg:top-4 lg:right-6"
      onClick={addToFav}
    >
      <img
        src={
          ifBookmarked
            ? '../assets/icon-bookmark-full.svg'
            : '../assets/icon-bookmark-empty.svg'
        }
        alt="bookmark button"
      />
    </button>
  );
};

export default AddToFav;
