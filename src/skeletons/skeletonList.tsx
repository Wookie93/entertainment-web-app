import 'react-loading-skeleton/dist/skeleton.css';
import ItemList from '../components/atoms/ListGrid/ItemList';
import { SkeletonBox } from './skeletonBox';

export const SkeletonList = () => {
  return (
    <>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <ItemList>
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <span className="sr-only">Loading...</span>
      </ItemList>
    </>
  );
};
