import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListAddComponent} from './shopping-list-add.component';
import {ShoppingRouting} from './shopping.routing';

@NgModule({
    declarations: [
                  ShoppingListComponent,
                  ShoppingListAddComponent
                  ],
      imports: [
              FormsModule,
              CommonModule,
              ShoppingRouting
              ]
})
export class ShoppingListModule{
    
}
