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

////// GET ALL MOVIES
async function getAllMovies() {
  const videosSnap = await getDocs(dbRef);
  const videosDB = createMapFromSnap(videosSnap);

  return videosDB;
}

const videosDB = await getAllMovies();

///////  GET TRENDINGS
async function getTrendingMovies() {
  const trendingMoviesSnap = await getDocs(
    query(dbRef, where('isTrending', '==', true))
  );
  const trendingArr = createMapFromSnap(trendingMoviesSnap);
  return trendingArr;
}

//////  GET ONLY MOVIES CATEGROY
async function getMovieSnap() {
  const moviesSnap = await getDocs(
    query(dbRef, where('category', '==', 'Movie'))
  );
  const moviesArr = createMapFromSnap(moviesSnap);
  return moviesArr;
}

//////  GET ONLY TV SERIES CATEGORY
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
  dbRef,
  storage,
  handleImageProfile,
  getMovieSnap,
  getTVSnap,
  getAllMovies,
  getTrendingMovies,
  videosDB,
};
