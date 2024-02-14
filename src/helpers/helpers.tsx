import { DocumentData } from 'firebase/firestore';

export function createMapFromSnap(snap: any) {
  const arr: { key: string; data: DocumentData }[] = [];
  snap.forEach((doc: DocumentData) =>
    arr.push({ key: doc.id, data: doc.data() })
  );

  return arr;
}
