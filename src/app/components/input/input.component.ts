import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin as ICoin, Money as IMoney } from 'src/app/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
}) 

export class InputComponent implements OnInit {
  private _currencies!: Array<ICoin> | Array<IMoney>;
  private _currencyType!: string;

  constructor() { 
  }

  @Input() 
  set currencies(currencies: Array<ICoin> | Array<IMoney>) { this._currencies = currencies };
  get currencies():Array<ICoin> | Array<IMoney> { return this._currencies };
  @Input()
  set currencyType(currencyType: string) { this._currencyType = currencyType };
  get currencyType(): string { return this._currencyType };

  @Output() onChangeCurrency = new EventEmitter<ICoin["sym"]>();

  changeCurrency(sym: string){
    this.onChangeCurrency.emit(sym);
  }

  ngOnInit(): void { }
}
