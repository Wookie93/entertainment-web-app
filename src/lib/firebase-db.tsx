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
import { createMapFromSnap } from '../helpers/helpers';

const db = getFirestore(app);
const storage = getStorage(app);
const dbRef = collection(db, 'Movies');

/// GET All MOVIES
const videosSnap = await getDocs(dbRef);

/// SET MOVIES DATABASE AS MAP
const videosDB = new Map();
videosSnap.forEach((doc) => {
  videosDB.set(doc.id, doc.data());
});

async function getAllMovies() {
  const videosSnap = await getDocs(dbRef);
  const videosDB = new Map();
  videosSnap.forEach((doc) => {
    videosDB.set(doc.id, doc.data());
  });

  return videosDB;
}

///////  GET TRENDINGS
const trendingMoviesSnap = await getDocs(
  query(dbRef, where('isTrending', '==', true))
);

async function getTrendingMovies() {
  const trendingMoviesSnap = await getDocs(
    query(dbRef, where('isTrending', '==', true))
  );
  const trendingArr = createMapFromSnap(trendingMoviesSnap);
  return trendingArr;
}

//////  GET ONLY MOVIES
async function getMovieSnap() {
  const moviesSnap = await getDocs(
    query(dbRef, where('category', '==', 'Movie'))
  );
  const moviesArr = createMapFromSnap(moviesSnap);
  return moviesArr;
}

//////  GET ONLY TV SERIES
async function getTVSnap() {
  const tvSeriesSnap = await getDocs(
    query(dbRef, where('category', '==', 'TV Series'))
  );
  const tvseriesArr = createMapFromSnap(tvSeriesSnap);
  return tvseriesArr;
}

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
  getMovieSnap,
  getTVSnap,
  getAllMovies,
  getTrendingMovies,
};
