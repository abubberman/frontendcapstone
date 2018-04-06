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

  constructor(private categoriesService: CategoriesService) {
    categoriesService.getData().subscribe(sub => {
      console.log('Shopping');
      this.categories = sub;
    });
  }

  ngOnInit() {}

  onSelect(products: Array<IProduct>) {
    this.products = products;
  }
}
