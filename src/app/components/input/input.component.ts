import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin as ICoin, CoinRate } from 'src/app/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private _coins!: Array<ICoin>;
  sym!: string;

  constructor() { 
  }

  @Input() 
  set coins(coins: Array<ICoin>){ this._coins = coins; };
  get coins():Array<ICoin>{ return this._coins}

  @Output() newItemEvent = new EventEmitter<ICoin["sym"]>();

  changeCurrency(sym: string){
    this.newItemEvent.emit(sym);
  }

  ngOnInit(): void { 
    console.log(this.coins)
  }
}
