import { Injectable } from '@angular/core';
import { CloudApplyUrlService } from '../url/cloud-apply-url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CloudApplyHttpService {

  constructor(
    private http: HttpClient,
    private cloudApplyUrl: CloudApplyUrlService
  ) { }


  getList(): Observable<any> {
    return this.http.post(
      this.cloudApplyUrl.getList,
      null,
      {headers: {'content-type': 'application/x-www'}}
      );
  }

}
