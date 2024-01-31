import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './firebase';
import { User, updateProfile } from 'firebase/auth';

const db = getFirestore(app);
const storage = getStorage(app);
const dbRef = collection(db, 'Movies');
let firstTrending = null;

/// GET All MOVIES
const videosSnap = await getDocs(dbRef);

/// SET MOVIES DATABASE AS MAP
const videosDB = new Map();
videosSnap.forEach((doc) => {
  videosDB.set(doc.id, doc.data());
});

//// GET TRENDINGS
const trendingMoviesSnap = await getDocs(
  query(dbRef, where('isTrending', '==', true))
);

trendingMoviesSnap.docs.forEach((doc, index) => {
  if (index === 0) firstTrending = { id: doc.id, data: doc.data() };
  else return;
});

/// GET PLACEHOLDERIMAGE
const placeholderImage = await getDownloadURL(
  ref(storage, `/thumbnails/${firstTrending!.id}/trending/large.jpg`)
);

/// GET ONLY MOVIES
const moviesSnap = await getDocs(
  query(dbRef, where('category', '==', 'Movie'))
);

/// GET ONLY TV SERIES
const tvSeriesSnap = await getDocs(
  query(dbRef, where('category', '==', 'TV Series'))
);

/// Helper function to upload photo
const handleImageProfile = async (userID: string, image: File, user: User) => {
  if (!image) return;

  try {
    const imageRef = ref(storage, `profileImages/${userID}/${image.name}`);
    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    await updateProfile(user, {
      photoURL: url,
    });
  } catch (e) {
    console.log(e);
  }
};

export {
  db,
  storage,
  handleImageProfile,
  trendingMoviesSnap,
  videosDB,
  videosSnap,
  moviesSnap,
  tvSeriesSnap,
  placeholderImage,
};
