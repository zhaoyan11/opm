import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
