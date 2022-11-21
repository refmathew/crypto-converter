import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() fromValue!: string;
  @Input() fromCurrency!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
