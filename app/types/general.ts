export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
}

export interface CryptoStore {
  cryptos: Crypto[];
  filteredCryptos: Crypto[];
  fetchCryptos: () => void;
  filterCryptos: (query: string) => void;
  loading: boolean;
  error: string | null;
}
