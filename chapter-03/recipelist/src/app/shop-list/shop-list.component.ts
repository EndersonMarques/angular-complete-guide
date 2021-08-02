import { Component, OnInit } from '@angular/core';
import { Ingredientes } from '../shared/ingredientes.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  ingredientes: Ingredientes[] = [
    new Ingredientes('Apples', 5),
    new Ingredientes('Tomates', 4),
    new Ingredientes('Bananas', 7),
    new Ingredientes('Nozes', 2),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
