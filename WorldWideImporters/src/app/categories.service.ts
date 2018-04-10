import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CategoriesService {
  private static timestamp = new Date();
  private categoriesSubject = new BehaviorSubject<Array<ICategory>>([]);
  constructor(private http: Http) {
    console.log('aangeroepen');
  }

  getData(): Observable<Array<ICategory>> {
    console.log(this.categoriesSubject.asObservable());
    return this.categoriesSubject.asObservable();
  }

  loadData() {
    this.http
      .get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
      .map((res: Response) => res.json())
      .subscribe((data: ICategory[]) => {
        this.categoriesSubject.next(data);
        console.log(data);
      });
  }
}
