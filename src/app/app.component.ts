import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoinService } from './services/coin.service';
import { CurrencyService } from './services/currency.service';
import { Coin as ICoin, CoinRate, CurrencyRate, Currency as ICurrency, Response } from './interfaces';
import { Coin } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  axieInfinity!: ICoin;
  binancecoin!: ICoin;
  bitcoin!: ICoin;
  ethereum!: ICoin;
  plantVsUndeadToken!: ICoin;
  coins!: Array<ICoin>;

  // Coins
  axieInfinityRate!: CoinRate;
  binancecoinRate!: CoinRate;
  bitcoinRate!: CoinRate;
  ethereumRate!: CoinRate;
  plantVsUndeadTokenRate!: CoinRate;
  // Currencies
  usdRate!: CurrencyRate;
  phpRate!: CurrencyRate;

  constructor( 
    private coinService: CoinService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.coinService.getPrice().subscribe(response => {
      this.axieInfinityRate = response['axie-infinity']
      this.bitcoinRate = response['bitcoin']
      this.binancecoinRate = response['binancecoin']
      this.ethereumRate = response['ethereum']
      this.plantVsUndeadTokenRate = response['plant-vs-undead-token']
      this.phpRate = this.currencyService.getRate(this.axieInfinityRate.php, this.binancecoinRate.php, this.bitcoinRate.php, this.ethereumRate.php, this.plantVsUndeadTokenRate.php);
      this.usdRate = this.currencyService.getRate(this.axieInfinityRate.usd, this.binancecoinRate.usd, this.bitcoinRate.usd, this.ethereumRate.usd, this.plantVsUndeadTokenRate.usd);

      this.axieInfinity = new Coin("Axie Infinity", "axs", "https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082", this.axieInfinityRate);
      this.binancecoin = new Coin("Binance Coin", "bnb", "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850", this.binancecoinRate);
      this.bitcoin = new Coin("Bitcoin", "btc", "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579", this.bitcoinRate);
      this.ethereum = new Coin("Ethereum", "eth", "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880", this.ethereumRate);
      this.plantVsUndeadToken = new Coin("Plant VS Undead Token", "pvu", "https://assets.coingecko.com/coins/images/17461/small/token-200x200.png?1627883446", this.plantVsUndeadTokenRate);
      this.coins = [this.axieInfinity, this.binancecoin, this.bitcoin, this.ethereum, this.plantVsUndeadToken]
      console.log(this.coins)
    });
  }
};
