import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  categories: Array<ICategory>;
  products: Array<IProduct>;
  subscription: Subscription;

  constructor(private categoriesService: CategoriesService) {
    this.subscription = this.categoriesService.getData().subscribe(sub => {
      this.categories = sub;
    });
  }

  ngOnInit() {

  }

  onSelect(products: Array<IProduct>) {
    this.products = products;
  }

}
