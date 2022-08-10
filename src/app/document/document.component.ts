import { Component, OnInit } from '@angular/core';
import cardData from '../../assets/json/data.json';
import {Cards} from '../cards'


@Component({
  selector: "document",
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit{
  
  cards: Cards[] = cardData;
  category = [...new Map(this.cards.map((x) => [x['category'], x])).values()];
  selectedCategory: String;

  // Shallow copy
  filteredItems: Cards[] = [...this.cards];
  
  searchFilter(titleValue : String){
    // console.log("Typed : " + titleValue);

    this.filteredItems = this.cards.filter((card: Cards) => {
      return card.title.toLowerCase().includes(titleValue.valueOf());
    })
  }

  applyFilter(categoryValue : String){
    // console.log("Clicked Value is " + categoryValue);

    if(categoryValue === 'all'){
      // console.log('all');

      this.filteredItems = [...this.cards];
    }
    else{
      this.filteredItems = this.cards.filter((card: Cards) => {
      return card.category.includes(categoryValue.valueOf());
    })
    }

    this.selectedCategory = categoryValue;

  }
  ngOnInit() {
    this.selectedCategory = 'all';
  }
  
  
}
