import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudApplyComponent } from './cloud-apply/cloud-apply.component';

const routes: Routes = [
  { path: '', component: CloudApplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudApplyRoutingModule { }
