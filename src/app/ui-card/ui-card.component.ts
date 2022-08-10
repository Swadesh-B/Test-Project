import { Component, OnInit, Input } from '@angular/core';
import {Cards} from '../cards'

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent implements OnInit {

  @Input() card: Cards;

  constructor() { }

  ngOnInit(): void {
     
  }

}
