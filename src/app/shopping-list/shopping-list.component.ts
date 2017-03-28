import { Ingredients } from '../recipes/ingredients'
import { ShoppingListService } from './shopping-list.service'
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredients[] = [];
  selectedItem: Ingredients = null;
  constructor(private sls: ShoppingListService) { }
  
  ngOnInit() {
    this.items = this.sls.getItems();
  }
  onSelectItem(item: Ingredients)
  {
    this.selectedItem = item;
  }
  onCleared()
  {
    this.selectedItem = null;
  }
}
