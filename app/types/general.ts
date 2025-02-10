export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export interface CryptoStore {
  cryptos: Crypto[];
  favorites: Crypto[];
  filteredCryptos: Crypto[];
  fetchCryptos: () => void;
  filterCryptos: (query: string) => void;
  toggleFavorite: (crypto: Crypto) => void;
  loading: boolean;
  error: string | null;
}
