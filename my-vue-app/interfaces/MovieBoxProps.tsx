export interface MovieBoxProps {
  isBig?: boolean;
  data: {
    title: string;
    category: string;
    rating: string;
    year: number;
    isBookmarked: boolean;
    isTrending: boolean;
    thumbnail: {
      regular: {
        large: string;
        medium: string;
        small: string;
      };
      trending?: {
        large: string;
        small: string;
      };
    };
  };
}

export interface MovieBoxPropsArray {
  data: [MovieBoxProps];
}
