import { ButtonProps } from '../../../../interfaces/ComponentsProps';

const Button = ({
  type,
  issecondary,
  text,
  link,
  classname,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {type === 'submit' ? (
        <button
          type="submit"
          className={`btn ${
            issecondary ? 'btn-secondary' : 'btn-primary'
          } font-light ${classname}`}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <a
          className={`btn ${
            issecondary ? 'btn-secondary' : 'btn-primary'
          } inline-block leading-[48px] font-light ${classname}`}
          href={link}
        >
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
