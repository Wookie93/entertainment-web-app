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
      placeholder="https://firebasestorage.googleapis.com/v0/b/entertainment-web-app-87503.appspot.com/o/placeholder.webp?alt=media&token=1378f98a-b77a-4353-bf7e-4de307e61693"
      rootMargin="0% 0% 0%"
      threshold={[1]}
    >
      {(src, loading) => {
        return (
          <img
            className={`progressive-image ${classname}`}
            style={{ opacity: loading ? 0.5 : 1 }}
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
