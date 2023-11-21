import { ContainerProps } from '../../../../interfaces/ComponentsProps';

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="max-w-[327px] w-screen m-auto p-6 bg-bcg-light rounded-[20px] md:max-w-[400px] md:p-8">
      {title ? <h2 className="text-3xl mb-10">{title}</h2> : null}
      {children}
    </div>
  );
};

export default Container;
