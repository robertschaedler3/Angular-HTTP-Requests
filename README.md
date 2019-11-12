# Angular HTTP Requests

A base template for making HTTP requests with and Angular Service.

## API Service

The service is used to give access to an api endpoint via a specified base url. When making a request an (observable)[] is returned containing the data from the response.

## Importing & Using

Importing into a component:

```typescript
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  ...
})
export class AppComponent {

    constructor (public api: ApiService) { }

}
```
From this point calls can be made to the endpoint by passing a path to `api.getData('/some/path')` either in the component or directly in the html.

### Component 
```typescript
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  ...
})
export class AppComponent {
    title = 'Angular-HTTP-Requests';

    constructor (public api: ApiService) { }

    // other stuff ...

    public update(path?: String | "") {
        this.api.getData(path);
    }
}
```

### HTML Template
```html
<div *ngIf="api.data$ | async as data">
<!-- <div *ngIf="api.getData("/some/path") | async as data"> -->
  <h1>DATA:</h1>
  <hr>
  <pre>
    {{data | json}}
  </pre>
</div>
```

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.*