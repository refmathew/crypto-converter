import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coin as ICoin } from 'src/app/interfaces';
import { setTimeout } from 'timers/promises';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit, OnChanges {
  @Input() coins!: Array<ICoin>;
  currencies: Array<string> = ['php', 'usd'];

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void{

  }
}
