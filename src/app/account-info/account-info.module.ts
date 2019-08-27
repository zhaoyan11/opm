import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';

@NgModule({
  declarations: [AccountInfoComponent],
  imports: [
    CommonModule,
    AccountInfoRoutingModule
  ]
})
export class AccountInfoModule { }
