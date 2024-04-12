import { TagProp } from '../../../../interfaces/ComponentsProps';

const Tag = ({ data }: TagProp) => {
  return (
    <span className="flex gap-1 items-center text-xs font-light md:text-base">
      {data?.image ? (
        <img src={data.image} alt="tag" width={10} height={10} />
      ) : null}
      {data.name}
    </span>
  );
};

export default Tag;
