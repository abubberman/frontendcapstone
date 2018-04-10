import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(
    private categoriesService: CategoriesService,
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

  goBack() {
    this.location.back();
  }
  ngOnInit() {}
}
