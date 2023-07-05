const AddToFav = () => {
  const addToFav = () => {
    console.log('added to favorites');
  };

  return (
    <button
      className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full z-10 md:top-4 md:right-4 lg:transition lg:hover:bg-black lg:hover:invert lg:top-4 lg:right-6"
      onClick={addToFav}
    >
      <img src="src/assets/icon-bookmark-empty.svg" alt="bookmark button" />
    </button>
  );
};

export default AddToFav;
