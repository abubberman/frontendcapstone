import { ShoppingCartService } from './shopping-cart.service';
import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private categoriesService: CategoriesService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    console.log('init fired');
    this.categoriesService.loadData();
    const x: IProduct = {
      name: '',
      description: '',
      rating: '',
      stock: '',
      category: '',
      subcategory: '',
      price: 1,
      imagelink: ''
    };

    this.shoppingCartService.addProduct(x, 1);
  }
}
