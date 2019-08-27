import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoUrlService {

  // 获取云桌面账号信息
  public getAccountInfo = 'account/query';
}
