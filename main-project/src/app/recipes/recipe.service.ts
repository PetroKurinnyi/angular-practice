import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Fruits',
      'Fresh foot for your health',
      `https://www.rd.com/wp-content/uploads/2017/10/12_Citrus_Healthy-Holiday-Food-Gifts-Instead-of-Fruit-Cake_524210419-ch_ch-1228x640.jpg`,
      [
        new Ingredient('Apple', 2),
        new Ingredient('Orange', 2),
        new Ingredient('Banana', 3),
        new Ingredient('Grapefruit', 1)
      ]),
    new Recipe(
      'Borsh',
      'Red ukranian soup',
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Borsh.jpg',
      [
        new Ingredient('Potato', 3),
        new Ingredient('Meat', 1),
        new Ingredient('Totatous', 2),
        new Ingredient('Beet', 2),
        new Ingredient('Water', 3)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  public recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredints: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredints);
  }



}
