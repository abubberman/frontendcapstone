import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {

  private products = new BehaviorSubject<Array<IOrderedProduct>>([]);

  constructor() {}

  getData(): Observable<Array<IOrderedProduct>> {
    return this.products.asObservable();
  }

  addProduct(product: IProduct, quantity: number) {
    const existingProduct = this.products.value.find(
      p => p.name === product.name
    );

    if (existingProduct === undefined) {
      const orderedProduct: IOrderedProduct = {
        imagelink: product.imagelink,
        name: product.name,
        price: product.price,
        quantity: quantity
      };

      this.products.value.push(orderedProduct);
    } else {
      existingProduct.quantity = existingProduct.quantity + quantity;
    }
    console.log(this.products);
  }

  removeProduct(productName: string) {
    const existingProduct = this.products.value.find(p => name === productName);

    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity--;

      if (existingProduct.quantity === 0) {
        const index = this.products.value.indexOf(existingProduct);

        this.products.value.splice(index, 1);
      }
    }
  }
}
