import { TALBUMS, TBANDS, TGENRES } from "src/models";
import create from "zustand";
import axios from "axios";
import { API_URL_ALBUMS, API_URL_BANDS, API_URL_GNRES } from "src/constants";

interface IBandsDataStore {
  bands: TBANDS; // original api data
  currentBands: TBANDS; // copy of original api data whit filters and sorts
  gnres: TGENRES;
  albums: TALBUMS;
  fetchBandsData: () => void;
  filterBands: (gnreCode: string) => void;
  sortBands: (sortCode: string) => void;
  searchBands: (bandsWords: string) => void;
  isFetchData: boolean;
}

export const useBandsDataStore = create<IBandsDataStore>((set, get) => ({
  bands: [],
  currentBands: [],
  gnres: [],
  albums: [],
  isFetchData: false,
  searchBands: (bandsWords) => {
    const { bands } = get();

    if (bandsWords === "") return set({ currentBands: bands });

    const bandsResults: TBANDS = bands.filter((band) =>
      band.name.toLowerCase().includes(bandsWords)
    );
    set({ currentBands: bandsResults });
  },
  fetchBandsData: async () => {
    set({ isFetchData: true });
    try {
      const bands = await axios.get(API_URL_BANDS);
      const gnres = await axios.get(API_URL_GNRES);
      const albums = await axios.get(API_URL_ALBUMS);
      set({
        bands: bands.data,
        currentBands: bands.data,
        gnres: gnres.data,
        albums: albums.data,
        isFetchData: false,
      });
    } catch (error) {
      console.log(error);
    }
  },

  filterBands: (gnreCode) => {
    const { bands } = get();

    if (gnreCode === "all") return set({ currentBands: bands });

    const bandsFilter: TBANDS = bands.filter(
      (band) => band.genreCode === gnreCode
    );
    set({ currentBands: bandsFilter });
  },
  sortBands: (sortCode) => {
    const { currentBands, bands } = get();

    switch (sortCode) {
      case "less":
        const bandsSortLess = [...currentBands].sort(
          (a, b) => a.members.length - b.members.length
        );
        set({ currentBands: bandsSortLess });
        break;
      case "more":
        const bandsSortMore = [...currentBands].sort(
          (a, b) => b.members.length - a.members.length
        );
        set({ currentBands: bandsSortMore });
        break;
      default:
        set({ currentBands: bands });
    }
  },
}));
