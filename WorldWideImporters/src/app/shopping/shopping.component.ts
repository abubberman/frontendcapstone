import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  subcategory: ISubCategory;
  categories: Array<ICategory> = [];
  products: Array<IProduct> = [];

  constructor(private categoriesService: CategoriesService) {
    categoriesService.getData().subscribe(sub => {
      this.categories = sub;
    });
  }

  ngOnInit() {}

  onSelect(subCategory: ISubCategory) {
    this.subcategory = subCategory;
    this.products = subCategory.items;
  }
}
