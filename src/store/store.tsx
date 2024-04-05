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
  actions: {
    getFavorites: () => void;
    getAllMovies: () => void;
    updateFavorites: () => void;
    checkIfBookmarked: (uid: string) => boolean;
    addFavorites: (uid: string) => void;
    removeFavorites: (uid: string) => void;
  };
}

export const useUserStore = create<UserStore>()((set, get) => ({
  userFavoritesUIDs: [],
  userFavorites: [],
  allVideos: [],

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
  },
}));

export const useStoreActions = () => useUserStore((state) => state.actions);

export const useUserFavorites = () =>
  useUserStore((state) => state.userFavorites);
export const useUserFavoritesUIDs = () =>
  useUserStore((state) => state.userFavoritesUIDs);
export const useUserAllVideos = () => useUserStore((state) => state.allVideos);
