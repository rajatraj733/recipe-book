import { Ingredients } from '../ingredients'
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service'


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
//  recipe = new Recipe('dummy', 'dummy', 'http://previews.123rf.com/images/yavuzunlu/yavuzunlu1210/yavuzunlu121000017/15804975-D-Baby-s-dummy-on-white-isolated-background-Stock-Photo-pacifier.jpg');
  
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
    (recipes: Recipe[]) => this.recipes = recipes        
    );
  }
  onSelectRecipe(recipe: Recipe){
  
  }
}
