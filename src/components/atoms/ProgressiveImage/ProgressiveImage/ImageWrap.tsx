import { ImageWrapProps } from 'interfaces/ComponentsProps';
import PlayButton from '../../PlayButton/PlayButton';
import ProgressiveImg from './ProgressiveImage';

const ImageWrap = ({
  isHovered,
  screenWidth,
  imageSmall,
  alt,
  thumbnail,
}: ImageWrapProps) => {
  return (
    <div className="relative">
      {isHovered && screenWidth > 1023 ? <PlayButton /> : null}
      <a href="#">
        <ProgressiveImg
          image={imageSmall}
          classname={`rounded-lg min-h-[110px] object-cover aspect-[1.5/1] md:aspect-[1.6/1] ${
            isHovered && screenWidth > 1023 ? 'brightness-50' : ''
          }`}
          alt={alt}
          width={278}
          height={170}
          thumbnail={thumbnail}
        />
      </a>
    </div>
  );
};

export default ImageWrap;
