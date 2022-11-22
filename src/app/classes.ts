import { CoinRate, MoneyRate } from './interfaces';

// export class Currency {
  // name: string;
  // logo: string;
  // rates: CurrencyRate|CoinRate;

  // constructor(name: string, logo: string, rates: CurrencyRate|CoinRate){
    // this.name = name;
    // this.logo = logo;
    // this.rates = rates;
  // }
// }


abstract class Currency {
  abstract rates: {};

  constructor(
    public name: string,
    public sym: string,
    public logo: string,
  ){ }

  abstract getRate( currency: string, amount: number): number;
}

export class Coin extends Currency { 
  rates: CoinRate;

  constructor( name: string, sym: string, logo: string, rates: CoinRate) {
    super(name, sym, logo);
    this.rates = rates;
  }

  getRate( currency: string, amount: number): number { 
    return this.rates[currency as keyof CoinRate] * amount;
  }
}

export class Money extends Currency { 
  rates: MoneyRate;

  constructor( name: string, sym: string, logo: string, rates: MoneyRate) {
    super(name, sym, logo);
    this.rates = rates;
  }

  getRate( currency: string, amount: number): number { 
    return this.rates[currency as keyof MoneyRate] * amount;
  }
}
