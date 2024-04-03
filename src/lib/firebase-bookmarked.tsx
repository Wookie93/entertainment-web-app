import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  where,
  query,
  documentId,
  onSnapshot,
} from 'firebase/firestore';
import { db, dbRef as Movies } from './firebase-db';
import { auth } from './firebase';
import { createMapFromSnap } from '../helpers/helpers';
import { useUserStore } from '../store/store';

const bookmarkRef = doc(db, 'Database', 'Bookmarked');
let docSnap = await getDoc(bookmarkRef);

/// Get bookmarked videos id for current user
const bookmarkedCollection = auth.currentUser
  ? docSnap.data()![auth.currentUser.uid]
  : null;

function getRealTimeMovies(collection: string[]) {
  onSnapshot(
    query(Movies, where(documentId(), 'in', collection)),
    (querySnapshot) => {
      const queryArr: any[] = [];
      querySnapshot.forEach((doc) => queryArr.push(doc));

      const moviesArr = createMapFromSnap(queryArr);
      useUserStore.setState({ userFavorites: moviesArr });
    }
  );
}

/// GET BOOKMARKED
async function getBookmarkedMovies() {
  const moviesSnap = await getDocs(
    query(Movies, where(documentId(), 'in', bookmarkedCollection))
  );
  const moviesArr = createMapFromSnap(moviesSnap);
  return moviesArr;
}

// SYNCHRONIZE BOOKMARKED COLLECTION
const synchronizeBookmarkedCollection = async (arrUIDs: string[]) => {
  if (!auth.currentUser) return;
  const uid = auth.currentUser!.uid;
  const ifUserExistInDB = docSnap.data()!.hasOwnProperty(uid);

  if (ifUserExistInDB) {
    await updateDoc(bookmarkRef, {
      [uid]: [...arrUIDs],
    });
  }
};

export {
  getRealTimeMovies,
  bookmarkedCollection,
  getBookmarkedMovies,
  synchronizeBookmarkedCollection,
};
