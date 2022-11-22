import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin as ICoin } from 'src/app/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private _coins!: Array<ICoin>;

  constructor() { 
  }

  @Input() currencyType!: string;
  @Input() 
  set coins(coins: Array<ICoin>) { this._coins = coins };
  get coins():Array<ICoin> { return this._coins };

  @Output() onChangeCurrency = new EventEmitter<ICoin["sym"]>();

  changeCurrency(sym: string){
    this.onChangeCurrency.emit(sym);
  }

  ngOnInit(): void { }
}
