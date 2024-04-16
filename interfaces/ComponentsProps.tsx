export interface ButtonProps {
  type?: 'submit';
  issecondary?: boolean;
  link?: string;
  text: string;
  classname?: string;
  onClick?: () => void;
}

export interface ContainerProps {
  title?: string;
  children: React.ReactNode;
}

export interface MenuItemProps {
  img?: string;
  alt?: string;
  link: string;
  text?: string;
  active?: boolean;
}

export interface TagProp {
  data: {
    name: string;
    image?: string;
  };
}

export interface ImageWrapProps {
  isHovered: boolean;
  screenWidth: number;
  imageSmall: string | undefined;
  alt: string;
  thumbnail: string | undefined;
}
