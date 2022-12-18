export interface Response {
  [key: string]: CoinRate;
}

export interface MoneyRate{
  btc: number;
  eth: number;
  bnb: number;
  axs: number;
  pvu: number;
}

export interface CoinRate { 
  php: number;
  usd: number;
}

export interface Currency { 
  name: string;
  logo: string;
  rates: MoneyRate | CoinRate;
}

export interface Coin { 
  name: string;
  sym: string;
  logo: string;
  rates: CoinRate;
  getRate(currency: string, amount: number): number;
}

export interface Money {
  name: string;
  sym: string;
  logo: string;
  rates: MoneyRate;
  getRate(currency: string, amount: number): number;
}
