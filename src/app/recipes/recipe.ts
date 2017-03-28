import { Ingredients } from './ingredients'
export class Recipe {
  public name;
  public description;
  public imagePath;
  constructor( name: string,  description: string,  imagePath: string, public ingredients: Ingredients[]){
  this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
