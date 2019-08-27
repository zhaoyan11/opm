import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }
  getList(): Observable<any> {
    return this.http.get('/user');
  }

  delete(): Observable<any> {
    const data = {total: 3, size: 10, page: 1, data: [{id: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park'}]};
    return of(data).pipe(
      delay(1000)
    );
  }
}
