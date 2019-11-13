import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = '<API-BASE>';
  private proxyURL = 'http://localhost:5001';

  data$: Observable<any>;

  constructor (private http: HttpClient) {
    this.get("/proxy", true);
  }

  public get(path?: string | "", proxy: boolean = false) {
    let url = (proxy) ? this.proxyURL : this.baseURL;
    let endpoint = (path === undefined) ? "" : path;
    return this.data$ = this.http.get(url + endpoint).pipe(
      map(data => _.values(data)),
      tap(console.log),
    );
  }

}
