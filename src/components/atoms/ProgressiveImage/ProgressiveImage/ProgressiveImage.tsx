import ProgressiveImage from 'react-progressive-graceful-image';

const ProgressiveImg = ({
  image,
  classname,

  alt,
  width,
  height,
  lazyLoading,
}: any) => {
  return (
    <ProgressiveImage src={image} placeholder="../assets/placeholder.webp">
      {(src, loading) => {
        return (
          <div>
            <img
              className={`progressive-image ${
                loading ? 'opacity-50' : 'opacity-100'
              } ${classname}`}
              src={src}
              width={width}
              height={height}
              alt={alt}
              loading={lazyLoading ? 'lazy' : 'eager'}
            />
            <noscript>
              <img
                className="progressive-image no-script"
                src="../assets/empty-image.svg"
                alt="image"
              />
            </noscript>
          </div>
        );
      }}
    </ProgressiveImage>
  );
};

export default ProgressiveImg;
