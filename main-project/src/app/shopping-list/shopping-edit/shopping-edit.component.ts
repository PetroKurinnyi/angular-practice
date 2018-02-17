import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;  // nameInputRef содерджит в себе html element input
  @ViewChild('amountInput') amountInputRef: ElementRef; // amountInputRef содерджит в себе html element input
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
      const ingName = this.nameInputRef.nativeElement.value;  // из штмл єлемента вытягиваем значение
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);

      // this.ingredientAdded.emit(newIngredient); // отправляем обьект ингридиента Output`ом
      this.shoppingListService.addIngredient(newIngredient);
  }
}
