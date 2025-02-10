import { create } from "zustand";
import axios from "axios";
import { CryptoStore } from "../types/general";

const useCryptoStore = create<CryptoStore>((set) => ({
  cryptos: [],
  filteredCryptos: [],
  loading: false,
  error: null,
  favorites: [],

  fetchCryptos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      if (response.data) {
        set({
          cryptos: response.data.data,
          filteredCryptos: response.data.data,
          loading: false,
        });
      } else {
        throw new Error("Formato de datos incorrecto");
      }
    } catch (error: any) {
      set({
        error: error.message || "Error al obtener criptomonedas",
        loading: false,
      });
    }
  },

  filterCryptos: (query: string) =>
    set((state) => ({
      filteredCryptos: state.cryptos.filter((crypto) =>
        crypto.name?.toLowerCase().includes(query.toLowerCase())
      ),
    })),

  toggleFavorite: (crypto) =>
    set((state) => {
      const isFavorite = state.favorites.some((fav) => fav.id === crypto.id);
      if (isFavorite) {
        return {
          favorites: state.favorites.filter((fav) => fav.id !== crypto.id),
        };
      } else {
        return { favorites: [...state.favorites, crypto] };
      }
    }),
}));

export default useCryptoStore;
