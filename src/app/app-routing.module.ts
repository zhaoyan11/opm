import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  // canLoad的意义在于，把heroes module 的权限绑定为是否有权加载此模块，
  // 而不是加载后用canActive来控制是否有权限进入此模块的路由
  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule', canLoad: [AuthGuard] },
  { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
