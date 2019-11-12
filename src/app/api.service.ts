import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = '<API-BASE>';

  data$: Observable<any>;

  constructor(private http: HttpClient) {
    this.getData();
  }

  private preloadData() {
    // some pre-loading operations
  }

  public getData(path?: String | "") {
    return this.data$ = this.http.get<string[]>(this.baseUrl + path).pipe(
      map(data => _.values(data)),
      tap(console.log),
    );
  }

}
