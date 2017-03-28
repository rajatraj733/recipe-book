import { Recipe } from '../recipe'
import { RecipesService } from '../recipes.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription: Subscription;
  private recipe: Recipe;
  private isNew = true;
  private recipeForm: FormGroup;
  constructor(private router: ActivatedRoute, private rs: RecipesService, private formBuilder: FormBuilder
               , private route: Router) { 
  }
  onSubmit(){
      const newRecipe = this.recipeForm.value;
      if(this.isNew)
          {
              this.rs.addRecipe(newRecipe);
              
          }
      else
          {
            this.rs.editRecipe(this.recipe, newRecipe);
            
      }
      this.navigateBack();
          
          
  }
  onCancel(){
      this.navigateBack();
  }
  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImageUrl = '';
    let recipeIngredients: FormArray = new FormArray([]);
    if(!this.isNew) {
      if(this.recipe.hasOwnProperty('ingredients'))
          {
              for(let i = 0; i<this.recipe.ingredients.length; i++) {
              recipeIngredients.push(new FormGroup({
                name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                amount: new FormControl(this.recipe.ingredients[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
              ])
              }));
            }
          }
      
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
        name: [recipeName, [Validators.required]],
        imagePath: [recipeImageUrl, [Validators.required]],
        description: [recipeDescription],
        ingredients: recipeIngredients
      });
     
  }
  
  ngOnInit() {
    this.subscription = this.router.params.subscribe(
    (params: any) => {
      if(params.hasOwnProperty('id')) {
        this.isNew = false;
        this.recipeIndex = +params['id'];
        this.recipe = this.rs.getRecipe(this.recipeIndex);
      }
      else {
        this.isNew = true;
        this.recipe = null;
      }
      this.initForm();
      console.log(this.isNew);
    }
    );
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
  navigateBack()
  {
      this.route.navigate(['../']);
  }
  onAddItem(itemName: String, itemAmount: Number) {
      (<FormArray> this.recipeForm.controls['ingredients']).push(
              new FormGroup({
                  name: new FormControl(itemName, Validators.required),
                  amount: new FormControl(itemAmount, [
                                                       Validators.required,
                                                       Validators.pattern("\\d+")
                                                       ])
              })
      );
      
  }
  onRemoveItem(i: number) {
      (<FormArray> this.recipeForm.controls['ingredients']).removeAt(i);
  }
  
}
