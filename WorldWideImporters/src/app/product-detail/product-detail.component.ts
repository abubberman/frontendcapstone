import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  quantity = 1;
  constructor(
    private categoriesService: CategoriesService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe(data => {
      categoriesService.getData().subscribe(categories => {

        categories.forEach(category => {
          category.subcategories.forEach(subCategory => {
            const foundProduct = subCategory.items.find(
              i => i.name === data.id
            );
            if (foundProduct !== undefined) {
              this.product = foundProduct;
            }
          });
        });
      });
    });
  }

  addProductToCart() {
    this.shoppingCartService.addProduct(this.product, this.quantity);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {}
}
