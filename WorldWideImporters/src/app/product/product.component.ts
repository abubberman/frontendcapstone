import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(data => {
      console.log(data);
    });
  }
}
