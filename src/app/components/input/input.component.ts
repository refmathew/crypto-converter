import { Component, OnInit, Input } from '@angular/core';
import { Coin as ICoin, CoinRate } from 'src/app/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() coins!: Array<ICoin>;

  constructor() { 
  }

  // private getRate(rate: CoinRate) {
    // if (typeof this.bitcoin.rates === CoinRate){

    // } 
  // }

  ngOnInit(): void { 
    console.log(this.coins)
  }
}
