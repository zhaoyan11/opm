import { NgModule } from '@angular/core';

import { CloudApplyRoutingModule } from './cloud-apply-routing.module';
import { CloudApplyComponent } from './cloud-apply/cloud-apply.component';
import { SharedModule } from '../shared/shared.module';
import { CloudApplyDetailComponent } from './cloud-apply-detail/cloud-apply-detail.component';

@NgModule({
  declarations: [CloudApplyComponent, CloudApplyDetailComponent],
  imports: [
    CloudApplyRoutingModule,
    SharedModule
  ],
  entryComponents: [CloudApplyDetailComponent]
})
export class CloudApplyModule { }
