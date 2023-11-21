import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase-db';
import { auth } from './firebase';

const bookmarkRef = doc(db, 'Database', 'Bookmarked');
const docSnap = await getDoc(bookmarkRef);

/// GET BOOKMARKED MOVIES FOR USER
const checkIfBookmarked = (uid: string) => {
  if (!auth.currentUser) return;
  return docSnap.data()![auth.currentUser.uid].includes(uid);
};

/// ADD MOVIE TO COLLECTION
const addMoviesToCollection = async (movieID: string) => {
  if (!auth.currentUser) {
    console.log('zaloguj się dzbanie');
  } else {
    const uid = auth.currentUser!.uid;
    const ifUserExistInDB = docSnap.data()!.hasOwnProperty(uid);

    if (ifUserExistInDB) {
      console.log('update bazy');
      await updateDoc(bookmarkRef, {
        [uid]: arrayUnion(movieID),
      });
    } else {
      await updateDoc(bookmarkRef, {
        [uid]: [movieID],
      });
    }
  }
};

const removeMoviesFromCollection = async () => {};

export { addMoviesToCollection, removeMoviesFromCollection, checkIfBookmarked };
