import Tag from '../../atoms/Tag/Tag';

const TagsList = ({
  year,
  rating,
  category,
}: {
  year: number;
  rating: string;
  category: string;
}) => {
  return (
    <div className="flex opacity-75 dotted">
      <Tag data={{ name: `${year}` }} />
      <Tag data={{ name: category, image: 'src/assets/tags/movie-tag.svg' }} />
      <Tag data={{ name: rating }} />
    </div>
  );
};

export default TagsList;
