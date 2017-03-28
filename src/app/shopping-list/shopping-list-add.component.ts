import { Ingredients } from '../recipes/ingredients'
import { ShoppingListService } from './shopping-list.service'
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  isAdd: boolean = true;
  @Input() item: Ingredients;
  @Output() changed = new EventEmitter();
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }
  ngOnChanges(changes){
    if(changes.item.currentValue === null)
      {
      this.isAdd = true;
    }else
      {
      this.isAdd = false;
    }
  }
  onSubmit(ingredient: Ingredients){
    if(!this.isAdd){
      this.sls.editItem(this.item, ingredient);
      this.item = ingredient;
      this.onClear();
    }
    else
      {
      this.sls.addItem(ingredient);
    }
  }
  onDeleteItem() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }
  onClear() {
    this.isAdd = true;
    this.changed.emit(null);
  }
}
