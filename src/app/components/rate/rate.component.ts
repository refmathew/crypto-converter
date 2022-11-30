import { Component, OnInit, Input } from '@angular/core';
import { Coin as ICoin } from 'src/app/interfaces';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})

export class RateComponent implements OnInit {
  private _fromSym!: ICoin["sym"];
  private _toSym!: ICoin["sym"];
  private _toValue!: number;

  @Input()
  set fromSym(sym: ICoin["sym"]) { this._fromSym = sym };
  get fromSym(): ICoin["sym"] { return this._fromSym};
  @Input()
  set toSym(sym: ICoin["sym"]) { this._toSym = sym };
  get toSym(): ICoin["sym"] { return this._toSym};
  @Input()
  set toValue(value: number) { this._toValue = value };
  get toValue(): number { return this._toValue};

  constructor() { }

  ngOnInit(): void { }
}

// identify if there is a change on an input and emit what the amountToConvert and its Sym is
