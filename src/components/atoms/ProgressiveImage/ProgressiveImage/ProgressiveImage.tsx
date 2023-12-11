import ProgressiveImage from 'react-progressive-graceful-image';

const ProgressiveImg = ({
  image,
  classname,
  alt,
  width,
  height,
  thumbnail,
}: any) => {
  return (
    <ProgressiveImage
      src={thumbnail === '' ? '../assets/empty-image.svg' : image}
      placeholder="../assets/placeholder.webp"
    >
      {(src) => {
        return (
          <img
            className={`progressive-image ${classname}`}
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ProgressiveImg;
