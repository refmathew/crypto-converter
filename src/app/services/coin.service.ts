import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MoneyRate, CoinRate, Response } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class CoinService {
  private coins: Array<string> = ['bitcoin', 'ethereum', 'binancecoin', 'axie-infinity', 'plant-vs-undead-token'];
  private currencies: Array<string> = ['php', 'usd'];
  private apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${this.coins.join(",")}&vs_currencies=${this.currencies.join(",")}`

  constructor(private http: HttpClient) { }

  getPrice(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
  }
}
