import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountInfoUrlService } from '../url/account-info-url.service';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoHttpService {
 
  constructor(
    private http: HttpClient,
    private accountInfoUrl: AccountInfoUrlService
  ) { }

  // 获取云桌面账号信息
  getAccountInfo(): Observable<any> {
    return this.http.post(this.accountInfoUrl.getAccountInfo, null);
  }


}
