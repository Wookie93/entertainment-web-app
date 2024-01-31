import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from './firebase-db';
import { auth } from './firebase';

//// Tutaj zrobić tak, że jak wbijasz na podstronę z ulubionymi to pobiera się świeża lista

const bookmarkRef = doc(db, 'Database', 'Bookmarked');
let docSnap = await getDoc(bookmarkRef);

/// Update docSnap
const getBookmarkRef = async () => {
  if (!auth.currentUser) return;
  const updatedCollection = await getDoc(bookmarkRef);
  return updatedCollection.data()![auth.currentUser.uid];
};

/// Get bookmarked videos for current user
const bookmarkedCollection = auth.currentUser
  ? docSnap.data()![auth.currentUser.uid]
  : null;

/// GET BOOKMARKED MOVIES FOR USER ---> zwracamy tablicę / przenieść do hooka
const checkIfBookmarked = (uid: string) => {
  if (!auth.currentUser || !docSnap.data()![auth.currentUser.uid]) return;
  return bookmarkedCollection.includes(uid);
};

/// ADD MOVIE TO COLLECTION
const addMoviesToCollection = async (movieID: string) => {
  if (!auth.currentUser) {
    console.log('zaloguj się dzbanie');
  } else {
    const uid = auth.currentUser!.uid;
    const ifUserExistInDB = docSnap.data()!.hasOwnProperty(uid);
    if (ifUserExistInDB) {
      await updateDoc(bookmarkRef, {
        [uid]: arrayUnion(movieID),
      });
      docSnap = await getDoc(bookmarkRef);
    } else {
      await updateDoc(bookmarkRef, {
        [uid]: [movieID],
      });
      docSnap = await getDoc(bookmarkRef);
    }
  }
};

const removeMoviesFromCollection = async (movieID: string) => {
  const uid = auth.currentUser!.uid;
  await updateDoc(bookmarkRef, {
    [uid]: arrayRemove(movieID),
  });
};

export {
  addMoviesToCollection,
  removeMoviesFromCollection,
  checkIfBookmarked,
  bookmarkedCollection,
  getBookmarkRef,
};
