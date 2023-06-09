const MenuItem = ({ img, alt }: { img: string; alt: string }) => (
  <li className="w-[16px]">
    <img src={img} alt={alt} />
  </li>
);

export default MenuItem;
