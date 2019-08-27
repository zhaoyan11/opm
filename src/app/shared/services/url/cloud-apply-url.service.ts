import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudApplyUrlService {

  // 获取云桌面登录流水
  public getList = '/api/conf/list';


}
