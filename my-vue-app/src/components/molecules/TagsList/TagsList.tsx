import Tag from '../../atoms/Tag/Tag';

const TagsList = () => {
  return (
    <div className="flex opacity-75 dotted">
      <Tag data={{ name: '2019' }} />
      <Tag data={{ name: 'Movie', image: 'src/assets/tags/movie-tag.svg' }} />
      <Tag data={{ name: 'PG' }} />
    </div>
  );
};

export default TagsList;
