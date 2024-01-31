// import { useEffect, useState } from 'react';
// import {
//   addMoviesToCollection,
//   checkIfBookmarked,
//   removeMoviesFromCollection,
// } from '../../../lib/firebase-bookmarked';

const AddToFav = ({
  isBookmarked,
  addToFav,
  removeFromFav,
}: {
  isBookmarked: boolean;
  addToFav: () => void;
  removeFromFav: () => void;
}) => {
  const favActions = () => {
    return isBookmarked ? removeFromFav() : addToFav();
  };

  return (
    <button
      className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full z-10 md:top-4 md:right-4 lg:transition lg:hover:bg-black lg:hover:invert lg:top-4 lg:right-6"
      onClick={favActions}
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
