import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  products: Array<IOrderedProduct>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.getData().subscribe(products => {
      this.products = products;
    });
  }

  removeProduct(productName: string) {
    this.shoppingCartService.removeProduct(productName);
  }

  getProductTotal(product: IOrderedProduct) {
    return (product.price * product.quantity).toFixed(2);
  }
  getSubTotal() {
    let totalPrice = 0;

    this.products.forEach(product => {
      totalPrice = totalPrice + Number(product.price * product.quantity);
    });

    return totalPrice.toFixed(2);
  }
}
