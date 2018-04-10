import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  subcategory: ISubCategory;
  categories: Array<ICategory> = [];
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];
  showOnlyInStock = false;
  sortBy = 'name';
  priceFilter: number | null = null;

  constructor(
    private categoriesService: CategoriesService,
    private shoppingCartService: ShoppingCartService
  ) {
    categoriesService.getData().subscribe(sub => {
      this.categories = sub;
    });
  }

  ngOnInit() {}

  onSelect(subCategory: ISubCategory) {
    this.subcategory = subCategory;
    this.products = subCategory.items;

    this.filterProducts();
  }

  filterProducts() {
    console.log(this.priceFilter);
    this.filteredProducts = this.products.filter(
      p =>
        (!this.showOnlyInStock || p.stock !== '0') &&
        (this.priceFilter === null ||
          p.price.toString().indexOf(this.priceFilter.toString()) > -1)
    );

    this.sortFilteredProducts();
  }
  sortFilteredProducts() {
    switch (this.sortBy) {
      case 'price':
        this.sortByPrice();
        break;
      case 'rating':
        this.sortByRating();
        break;
      default:
        this.sortByName();
        break;
    }
  }

  private sortByPrice() {
    this.filteredProducts.sort(function(a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
  }

  private sortByRating() {
    this.filteredProducts.sort(function(a, b) {
      if (a.rating.toLocaleLowerCase() < b.rating.toLocaleLowerCase()) {
        return -1;
      }
      if (a.rating.toLocaleLowerCase() > b.rating.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  private sortByName() {
    this.filteredProducts.sort(function(a, b) {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  addProductToCart(product: IProduct) {

    this.shoppingCartService.addProduct(product, 1);
  }
}
