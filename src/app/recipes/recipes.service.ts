import { Ingredients } from './ingredients'
import { Recipe } from './recipe'
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipesService {
   recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('dummy', 'dummy', 'http://previews.123rf.com/images/yavuzunlu/yavuzunlu1210/yavuzunlu121000017/15804975-D-Baby-s-dummy-on-white-isolated-background-Stock-Photo-pacifier.jpg',[
    new Ingredients('carrot', 2),
      new Ingredients('onion', 1)
    ]),
    new Recipe('dolly', 'dolly', 'http://www.sunny-bears.com//images/product_pictures/Dolly-Pockets-Goldilocks-and-3-Bears-Doll-6328',[
    new Ingredients('potato', 4),
      new Ingredients('tomato', 6)
    ])
  ];
  constructor(private http: Http) { }
  getRecipes(){
    return this.recipes;
  }
  getRecipe(recipeIndex: number)
  {
    return this.recipes[recipeIndex];
  }
  deleteRecipe(recipe: Recipe)
  {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe)
  {
      this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe)
    {
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
  storeData() {
      const body = JSON.stringify(this.recipes);
      const headers = new Headers ({
          'Content-Type': 'application/json'
      });
      return this.http.put("https://recipebook-6a750.firebaseio.com/recipes.json", body, {headers: headers})
  }
  fetchData() {
      return this.http.get("https://recipebook-6a750.firebaseio.com/recipes.json")
      .map((response: Response) => response.json())
      .subscribe(
              (data: Recipe[]) => 
              {
                  console.log(data);
                  this.recipes = data;
                  this.recipesChanged.emit(this.recipes);
              }
              );
  }
}
