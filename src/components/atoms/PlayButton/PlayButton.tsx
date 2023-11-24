const PlayButton = () => {
  const PlayVideo = () => {
    console.log('play video');
  };

  return (
    <a
      className="hidden lg:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  gap-5 items-center p-2.5 rounded-[28.5px] bg-white/25 z-10"
      href="#"
      onClick={PlayVideo}
    >
      <img src="../assets/icon-play.svg" alt="play ico" />
      <span>Play</span>
    </a>
  );
};

export default PlayButton;
