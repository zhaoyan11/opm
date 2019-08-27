import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  
  // 云桌面信息
  { path: 'accountInfo', loadChildren: './account-info/account-info.module#AccountInfoModule' },
  { path: 'cloudApply', loadChildren: './cloud-apply/cloud-apply.module#CloudApplyModule' },
  // { path: '', redirectTo: '/accountInfo', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
