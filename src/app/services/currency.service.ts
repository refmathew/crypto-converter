import { Injectable } from '@angular/core';
import { MoneyRate } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency!: MoneyRate;

  constructor() { }

  getRate( axs: number, bnb: number, btc: number, eth: number, pvu: number ): MoneyRate {

    let rate = { axs, bnb, btc, eth, pvu };

    rate.axs = 1 / axs;
    rate.bnb = 1 / bnb;
    rate.btc = 1 / btc;
    rate.eth= 1 / eth;
    rate.pvu = 1 / pvu;

    this.currency = rate;
    return this.currency;
  }
}
