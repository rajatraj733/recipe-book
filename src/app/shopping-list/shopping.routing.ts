import { Routes, RouterModule } from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';


const SHOPPING_ROUTES: Routes = [
  { path: '', component: ShoppingListComponent }
  
];

export const ShoppingRouting = RouterModule.forChild(SHOPPING_ROUTES);