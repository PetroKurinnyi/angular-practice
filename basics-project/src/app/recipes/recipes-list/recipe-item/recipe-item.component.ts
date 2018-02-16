import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;                              // тут принимаем значение
  @Output() recipeSelected = new EventEmitter<void>(); // we do not pass any information so we use <void>
                                                        // @Output we use for listen this event from outside // тобиш отсылаем ивент
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();  // на вызов этой функции отправляем ивент
  }
}
