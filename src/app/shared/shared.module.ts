import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhaoyancComponent } from './components/zhaoyanc/zhaoyanc.component';
import { ZhanyanpPipe } from './pipes/zhanyanp.pipe';
import { ZhanyandDirective } from './directives/zhanyand.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ZhaoyancComponent, ZhanyanpPipe, ZhanyandDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,

    ZhaoyancComponent,

    ZhanyandDirective,

    ZhanyanpPipe
  ]
})
export class SharedModule { }
