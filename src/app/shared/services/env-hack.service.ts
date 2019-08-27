import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SerializeService } from './serialize.service';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvHackService {
  public isProd: boolean = environment.production;

  constructor(
    private router: Router,
    private http: HttpClient,
    private serialize: SerializeService
  ) { }

  hack(): void {
    if (this.isProd) {
      const iframePath: string = window.top['_iframePath'];
      const routerPath = iframePath.split('/')[2];

      this.router.navigateByUrl(routerPath);
    } else {
      this.mockLogin();
    }
  }

  mockLogin(): void {
    const data = {username: 'admin', password: 'admin123', rememberMe: false};
    this.http.post(
      '/opm/login',
      this.serialize.serializeData(data),
      { headers: {'content-type': 'application/x-www-form-urlencoded;'} }
    )
      .pipe(retry(3))
      .subscribe(res => {
        if (res['code'] === 0) {
          this.router.navigateByUrl('/cloudApply');
        }
      });
  }
}
