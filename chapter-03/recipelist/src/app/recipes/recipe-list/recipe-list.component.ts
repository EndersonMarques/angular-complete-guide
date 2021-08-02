import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A teste recipe', 'Tihs is simples', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2018/09/Beef-casserole-recipe.jpg'),
    new Recipe('Receita 2', 'Outro exemplo', 'https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/Barley_Kimchi_Sausage_GettyImages-1214116994_1920x1280-700x461.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
  