interface ButtonProps {
  type?: 'submit';
  issecondary?: boolean;
  link?: string;
  text: string;
}

const Button = ({ type, issecondary, text, link }: ButtonProps) => {
  return (
    <>
      {type === 'submit' ? (
        <button
          type="submit"
          className={`btn ${
            issecondary ? 'btn-secondary' : 'btn-primary'
          } font-light`}
        >
          {text}
        </button>
      ) : (
        <a
          className={`btn ${
            issecondary ? 'btn-secondary' : 'btn-primary'
          } inline-block leading-[48px] font-light`}
          href={link}
        >
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
