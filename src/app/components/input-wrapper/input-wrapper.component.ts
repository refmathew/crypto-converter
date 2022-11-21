import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coin as ICoin } from 'src/app/interfaces';
import { setTimeout } from 'timers/promises';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit, OnChanges {
  currencies: Array<string> = ['php', 'usd'];
  $data!: string;

  private _coins!: Array<ICoin>;
  @Input() 
  set coins(coins: Array<ICoin>){ this._coins = coins; };
  get coins():Array<ICoin>{ return this._coins}

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void{ }

  changeCurrency(sym: ICoin["sym"]){
    console.log(sym)
  }
}
