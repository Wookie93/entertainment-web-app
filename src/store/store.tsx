import {
  bookmarkedCollection,
  synchronizeBookmarkedCollection,
  getBookmarkedMovies,
  getRealTimeMovies,
} from '../lib/firebase-bookmarked';
import { getAllMovies } from '../lib/firebase-db';
import { create } from 'zustand';

interface UserStore {
  userFavoritesUIDs: any;
  userFavorites: any;
  allVideos: any;
  openInfoModal: boolean;
  mainRoot: Element;
  actions: {
    getFavorites: () => void;
    getAllMovies: () => void;
    updateFavorites: () => void;
    checkIfBookmarked: (uid: string) => boolean;
    addFavorites: (uid: string) => void;
    removeFavorites: (uid: string) => void;
    setModalState: (state: boolean) => void;
  };
}

export const useUserStore = create<UserStore>()((set, get) => ({
  userFavoritesUIDs: [],
  userFavorites: [],
  allVideos: [],
  openInfoModal: false,
  mainRoot: document.getElementById('root') as Element,

  actions: {
    getFavorites: async () => {
      const favs = await getBookmarkedMovies();
      set({
        userFavorites: favs,
        userFavoritesUIDs: bookmarkedCollection,
      });
    },

    getAllMovies: async () => {
      const allVideos = await getAllMovies();
      set({
        allVideos: allVideos,
      });
      console.log('all videos are loaded');
    },

    updateFavorites: () => {
      getRealTimeMovies(get().userFavoritesUIDs);
    },

    checkIfBookmarked: (uid: string) => {
      return get().userFavoritesUIDs.includes(uid);
    },

    addFavorites: async (uid: string) => {
      set((state) => ({
        userFavoritesUIDs: [uid, ...state.userFavoritesUIDs],
      }));
      console.log(get().userFavoritesUIDs);
      await synchronizeBookmarkedCollection(get().userFavoritesUIDs);
      get().actions.updateFavorites();
    },

    removeFavorites: async (uid: string) => {
      set((state) => ({
        userFavoritesUIDs: state.userFavoritesUIDs.filter(
          (u: any) => u !== uid
        ),
      }));
      await synchronizeBookmarkedCollection(get().userFavoritesUIDs);
      get().actions.updateFavorites();
    },

    setModalState: (state: boolean) => {
      set(() => ({ openInfoModal: state }));

      get().openInfoModal
        ? get().mainRoot.classList.add('open')
        : get().mainRoot.classList.remove('open');
    },
  },
}));

export const useStoreActions = () => useUserStore((state) => state.actions);

export const useUserFavorites = () =>
  useUserStore((state) => state.userFavorites);
export const useUserFavoritesUIDs = () =>
  useUserStore((state) => state.userFavoritesUIDs);
export const useUserAllVideos = () => useUserStore((state) => state.allVideos);
export const useUserModal = () => useUserStore((state) => state.openInfoModal);
