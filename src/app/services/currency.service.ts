import { Injectable } from '@angular/core';
import { CurrencyRate } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency!: CurrencyRate;

  constructor() { }

  getRate( 
    axieInfinity: number, 
    binancecoin: number, 
    bitcoin: number, 
    ethereum: number, 
    plantVsUndeadToken: number ): CurrencyRate {

    let rate = {
      axieInfinity,
      binancecoin,
      bitcoin,
      ethereum,
      plantVsUndeadToken
    };

    rate.axieInfinity = 1 / axieInfinity;
    rate.binancecoin = 1 / binancecoin;
    rate.bitcoin = 1 / bitcoin;
    rate.ethereum = 1 / ethereum;
    rate.plantVsUndeadToken = 1 / plantVsUndeadToken;

    this.currency = rate;
    return this.currency;
  }
}
