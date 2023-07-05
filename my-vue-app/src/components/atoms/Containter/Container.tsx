interface ContainerProps {
  title?: string;
  children: React.ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="p-8 bg-bcg-light rounded-[20px]">
      {title ? <h2 className="mb-10">{title}</h2> : null}
      {children}
    </div>
  );
};

export default Container;
