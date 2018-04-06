import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Array<IProduct>;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.categoriesService.getData().subscribe(sub => {
      const firstFeaturedItem = sub[0].subcategories[0].items[1];
      const secondFeaturedItem = sub[1].subcategories[1].items[1];
      const thirdFeaturedItem = sub[2].subcategories[2].items[3];

      this.featuredProducts = [
        firstFeaturedItem,
        secondFeaturedItem,
        thirdFeaturedItem
      ];
      console.log(this.featuredProducts);
    });
  }

  ngOnInit() {}

  openProductDetail(product: IProduct) {
    this.router.navigate(['/product', product.name]);
  }
}
