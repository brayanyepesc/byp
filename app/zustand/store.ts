import { create } from "zustand";
import axios from "axios";
import { CryptoStore } from "../types/general";

const useCryptoStore = create<CryptoStore>((set) => ({
  cryptos: [],
  filteredCryptos: [],
  loading: false,
  error: null,

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
}));

export default useCryptoStore;
