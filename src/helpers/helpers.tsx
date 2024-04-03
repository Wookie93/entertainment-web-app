import { DocumentData } from 'firebase/firestore';

export function createMapFromSnap(snap: any) {
  const arr: { key: string; data: DocumentData }[] = [];
  snap.forEach((doc: DocumentData) =>
    arr.push({ key: doc.id, data: doc.data() })
  );

  return arr;
}

export function getRandomVideosArray(
  numOfVideos: number,
  videosArray: DocumentData[]
) {
  const numberOfVideos = numOfVideos;
  const randomIndexes: number[] = [];
  const chosenVideos = [];

  for (let i = 0; i < numberOfVideos; i++) {
    const randomNumber = Math.floor(Math.random() * (numOfVideos - 0)) + 0;
    if (!randomIndexes.includes(randomNumber)) {
      randomIndexes.push(randomNumber);
      chosenVideos.push(videosArray[randomNumber]);
    }
  }
  return chosenVideos;
}
