import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  /* recipe: Recipe; */

  /* constructor(private recipeService: RecipeService) { } */

  ngOnInit() {
    /* this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    }) */
  }
}
