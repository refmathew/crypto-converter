import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Coin as ICoin, Money as IMoney } from 'src/app/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
}) 

export class InputComponent implements OnInit, OnChanges {
  private _currencies!: Array<ICoin> | Array<IMoney>;
  private _otherCurrencies: Array<ICoin> | Array<IMoney>;
  private _currencyType!: string;
  ownSym;
  ownAmount;
  currentLogo;

  private _currentCurrencyType: string;
  private _currentSym: ICoin["sym"] | IMoney["sym"];
  private _currentAmount: number;

  constructor() { 
  }

  @Input() 
  set currencies(currencies: Array<ICoin> | Array<IMoney>) { this._currencies = currencies };
  get currencies():Array<ICoin> | Array<IMoney> { return this._currencies };
  @Input() 
  set otherCurrencies(currencies: Array<ICoin> | Array<IMoney>) { this._otherCurrencies = currencies };
  get otherCurrencies():Array<ICoin> | Array<IMoney> { return this._otherCurrencies };
  @Input()
  set currencyType(currencyType: string) { this._currencyType = currencyType };
  get currencyType(): string { return this._currencyType };
  @Input()
  set currentCurrencyType(currentCurrencyType: string) { this._currentCurrencyType = currentCurrencyType };
  get currentCurrencyType(): string { return this._currentCurrencyType };
  @Input()
  set currentSym(currentSym: ICoin["sym"] | IMoney["sym"]) { this._currentSym = currentSym };
  get currentSym(): ICoin["sym"] | IMoney["sym"] { return this._currentSym };
  @Input()
  set currentAmount(currentAmount: number) { this._currentAmount = currentAmount };
  get currentAmount(): number { return this._currentAmount };


  @Output() currencyChange = new EventEmitter<{ 
    sym: ICoin["sym"] | IMoney["sym"], 
    amount: number,
    currencyType: string
  }>();


  ngOnInit(): void { 
    // initialize own sym, logo and amount for money and ownSym for coin
    if (this.currencyType === 'coin') {
      this.ownSym = 'btc'
      this.ownAmount = 1;

      this.currencyChange.emit({
        sym :  this.ownSym,
        amount: this.ownAmount,
        currencyType: this.currencyType
      })

    } else {
      this.ownSym = 'usd'
    }
  }


  ngOnChanges(change: SimpleChanges) {

    // initialize ownAmount for coin
    if (this.currencyType === 'money') {
      if (change['otherCurrencies'] && change['otherCurrencies']['firstChange'] === false) {
        this.ownAmount = this.otherCurrencies[2].getRate('usd', 1);
        // this.changeLogo();
      }

      if (change['currencies'] && change['currencies']['firstChange'] === false) {
        this.currentLogo = this.currencies[0].logo;
      }
    } else {
      if (change['currencies'] && change['currencies']['firstChange'] === false) {
        this.currentLogo = this.currencies[2].logo;
      }
    }

    if (change['currentSym'] || change['currentCurrencyType'] || change['currentAmount']) { 
      if (this.currentCurrencyType !== this.currencyType) {
        // find the currentSym element in otherCurrencies
        let otherCurrencyIndex = this.otherCurrencies.findIndex(currency => currency['sym'] === this.currentSym);
        this.ownAmount = this.otherCurrencies[otherCurrencyIndex].getRate(this.ownSym, this.currentAmount);
      }
    }
  }

  onCurrencyChange(){
    this.currencyChange.emit({
      sym: this.ownSym,
      amount: this.ownAmount,
      currencyType: this.currencyType
    });
  
    this.changeLogo();
  }

  changeLogo() {
    let currencyIndex = this.currencies.findIndex(currency => currency['sym'] === this.ownSym);
    this.currentLogo = this.currencies[currencyIndex]['logo']
  }
}
