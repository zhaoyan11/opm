import { NgModule } from '@angular/core';

import { CloudApplyRoutingModule } from './cloud-apply-routing.module';
import { CloudApplyComponent } from './cloud-apply/cloud-apply.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CloudApplyComponent],
  imports: [
    CloudApplyRoutingModule,
    SharedModule
  ]
})
export class CloudApplyModule { }
