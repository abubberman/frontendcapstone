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
  calculateSubTotal() {
    let subTotalPrice = 0;

    this.products.forEach(product => {
      subTotalPrice = subTotalPrice + Number(product.price * product.quantity);
    });

    return subTotalPrice.toFixed(2);
  }

  calculateTax() {
    let taxPrice = 0;

    this.products.forEach(product => {
      taxPrice = taxPrice + Number(product.price * product.quantity);
    });

    return (taxPrice * 0.1).toFixed(2);
  }

  calculateTotal() {
    let totalPrice = 0;

    this.products.forEach(product => {
      totalPrice = totalPrice + Number(product.price * product.quantity);
    });

    return ((totalPrice * 1.10) + 10).toFixed(2);
  }
}
