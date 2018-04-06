import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoriesService {
  private categoriesSubject = new Subject<Array<ICategory>>();
  // private categories = new Array<ICategory>();
  constructor(private http: Http) {
  }

  getData(): Observable<Array<ICategory>> {
    console.log('test');
    return this.categoriesSubject.asObservable();
  }

  // getProductByName(name: string): IProduct {
  //      this.getData().subscribe(categories => {
  //     let product: IProduct = null;
  //     categories.forEach(category => {
  //       category.subcategories.forEach(subCategory => {
  //         const foundProduct = subCategory.items.find(i => i.name === name);

  //         if (foundProduct !== undefined) {
  //           console.log(foundProduct);
  //           product = foundProduct;
  //         }
  //       });
  //       return product;
  //   });
  //   // this.categories.forEach(category => {
  //   //   category.subcategories.forEach(subCategory => {
  //   //     const foundProduct = subCategory.items.find(i => i.name === name);

  //   //     if (foundProduct !== undefined) {
  //   //       console.log(foundProduct);
  //   //       product = foundProduct;
  //   //     }
  //   //   });
  //   });

  // }

  loadData() {
    this.http
      .get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
      .map((res: Response) => res.json())
      .subscribe((data: ICategory[]) => {
        this.categoriesSubject.next(data);
        // this.categories = data;
      });
  }
}
