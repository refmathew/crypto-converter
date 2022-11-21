export interface Response {
  [key: string]: CoinRate;
}

export interface CurrencyRate{
  bitcoin: number;
  ethereum: number;
  binancecoin: number;
  axieInfinity: number;
  plantVsUndeadToken: number;
}

export interface CoinRate { 
  php: number;
  usd: number;
}

export interface Currency { 
  name: string;
  logo: string;
  rates: CurrencyRate | CoinRate;
}

export interface Coin { 
  name: string;
  sym: string;
  logo: string;
  rates: CoinRate;
  getRate(currency: string, amount: number): number;
}
