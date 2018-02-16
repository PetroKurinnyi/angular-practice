import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  imgPath: Array<string> = [
    'https://www.rd.com/wp-content/uploads/2017/10/12_Citrus_Healthy-Holiday-Food-Gifts-Instead-of-Fruit-Cake_524210419-ch_ch-1228x640.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Borsh.jpg'
  ];
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is test description', this.imgPath[0]),
    new Recipe('Borsh', 'Red ukranian soup', this.imgPath[1])
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
