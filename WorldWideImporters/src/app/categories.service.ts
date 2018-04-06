import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoriesService {
  private categoriesSubject = new Subject<Array<ICategory>>();
  constructor(private http: Http) {}

  getData(): Observable<Array<ICategory>> {
    return this.categoriesSubject.asObservable();
  }

  loadData() {
    this.http
      .get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
      .map((res: Response) => res.json())
      .subscribe((data: ICategory[]) => {
        this.categoriesSubject.next(data);
      });
  }
}
