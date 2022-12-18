import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Coin as ICoin, Money as IMoney } from 'src/app/interfaces';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {
  private _coins!: Array<ICoin>;
  private _moneyy!: Array<IMoney>;

  // Initial conversion
  currentCurrencyType: "";
  currentSym: "usd";
  currentAmount: 1;


  constructor() { }


  ngOnInit(): void { }


  @Input() 
  set coins(coins: Array<ICoin>){ this._coins = coins; };
  get coins():Array<ICoin>{ return this._coins};
  @Input() 
  set moneyy(moneyy: Array<IMoney>){ this._moneyy = moneyy; };
  get moneyy():Array<IMoney>{ return this._moneyy};


  onCurrencyChange(res){
    this.currentCurrencyType = res['currencyType'];
    this.currentSym = res['sym'];
    this.currentAmount = res['amount'];
  }
}
