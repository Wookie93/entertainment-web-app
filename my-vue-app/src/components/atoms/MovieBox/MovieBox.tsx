

const MovieBox = ({isBig}: {isBig?: boolean}) => {
  return (
    <div className={isBig ? "relative w-[240px] rounded-lg " : 'relative rounded-lg '}>
      <button className="absolute top-2 right-2 w-[32px] h-[32px] flex justify-center items-center bg-bcg-dark/50 rounded-full ">
        <img src="src/assets/icon-bookmark-empty.svg" alt="bookmark button" />
      </button>
        <img
          className={`rounded-lg ${isBig ? '' : 'min-h-[110px]'}`}
          src="src/assets/thumbnails/beyond-earth/trending/small.jpg"
          alt=""
        />
      <div className={isBig ? "absolute bottom-4 left-4" : 'mt-2'}>
        <div className="opacity-75 mb-1">
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
