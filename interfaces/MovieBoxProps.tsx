export interface MovieBoxProps {
  key: string;
  isTrending?: boolean;
  lazyLoading?: boolean;
  uid: string;
  index?: number;
  data: {
    title: string;
    category: string;
    rating: string;
    year: number;
    isBookmarked: boolean;
    isTrending: boolean;
    thumbnail: {
      none?: string;
      regular?: {
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
  video: [MovieBoxProps];
}
