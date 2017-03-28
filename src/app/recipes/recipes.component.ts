import { Recipe } from './recipe'
import { Component } from '@angular/core';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  {
  selectedRecipe: Recipe;
}
