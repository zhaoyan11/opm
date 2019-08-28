import { Injectable } from '@angular/core';
import { CloudApplyUrlService } from '../url/cloud-apply-url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SerializeService } from '../serialize.service';

@Injectable({
  providedIn: 'root'
})

export class CloudApplyHttpService {

  constructor(
    private http: HttpClient,
    private cloudApplyUrl: CloudApplyUrlService,
  ) { }


  getList(queryParams): Observable<any> {
    return this.http.post(
      this.cloudApplyUrl.getList,
      queryParams,
      {headers: {'content-type': 'application/x-www-form-urlencoded'}}
      );
  }

}
