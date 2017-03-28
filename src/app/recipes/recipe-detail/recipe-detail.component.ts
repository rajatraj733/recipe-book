import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;
  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private rs: RecipesService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params):any => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.rs.getRecipe(this.recipeIndex);
      }
    );
  }
  onAddToShoppingList()
  {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  onEdit()
  {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.rs.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

    
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
