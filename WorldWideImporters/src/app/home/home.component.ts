import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Array<IProduct>;

  constructor(
    private categoriesService: CategoriesService
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

}
