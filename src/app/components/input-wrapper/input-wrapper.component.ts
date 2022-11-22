import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Coin as ICoin } from 'src/app/interfaces';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {
  private _coins!: Array<ICoin>;

  @Input() 
  set coins(coins: Array<ICoin>){ this._coins = coins; };
  get coins():Array<ICoin>{ return this._coins}

  @Output() onChangeCurrency = new EventEmitter<ICoin["sym"]>();

  constructor() { }

  ngOnInit(): void { }

  changeCurrency(sym: ICoin["sym"]){
    this.onChangeCurrency.emit(sym);
  }
}
