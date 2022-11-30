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

  @Input() 
  set coins(coins: Array<ICoin>){ this._coins = coins; };
  get coins():Array<ICoin>{ return this._coins};
  @Input() 
  set moneyy(moneyy: Array<IMoney>){ this._moneyy = moneyy; };
  get moneyy():Array<IMoney>{ return this._moneyy};

  @Output() onChangeCurrency = new EventEmitter<ICoin["sym"]>();

  constructor() { }

  ngOnInit(): void { }

  changeCurrency(sym: ICoin["sym"]){
    this.onChangeCurrency.emit(sym);
    console.log(sym)
  }
}
