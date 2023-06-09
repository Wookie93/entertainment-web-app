const MovieBox = () => {
  return (
    <div className="relative w-[240px] rounded-lg ">
      <button className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full ">
        <img src="src/assets/icon-bookmark-empty.svg" alt="bookmark button" />
      </button>

      <div>
        <img
          className="rounded-lg"
          src="src/assets/thumbnails/beyond-earth/trending/small.jpg"
          alt=""
        />
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="opacity-75">
          <span>2019</span>
          <span>Movie</span>
          <span>PG</span>
        </div>
        <p className="leading-[19px]">Beyond Earth</p>
      </div>
    </div>
  );
};

export default MovieBox;
