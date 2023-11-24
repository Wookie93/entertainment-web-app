const ItemList = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement[];
}) => {
  return (
    <section className="px-3.5 min-h-[300px] sm:px-0">
      <h2 className="mb-6 md:mb-7 lg:mb-6 xl:mb-9">{title}</h2>
      <div className="grid justify-items-center grid-cols-2 gap-4 min-[480px]:grid-cols-3 sm:grid-cols-3 md:gap-x-8 md:gap-y-5 lg:gap-x-10 lg:gap-y-7 xl:grid-cols-4 lg:pr-5">
        {children}
      </div>
    </section>
  );
};

export default ItemList;
