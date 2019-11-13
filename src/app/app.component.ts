import { Component } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-HTTP-Requests';

  constructor(public api: ApiService) { }
  
  public getData() {
    this.api.get('/proxy', true);
  }

}
