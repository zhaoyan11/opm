import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhaoyancComponent } from './components/zhaoyanc/zhaoyanc.component';
import { ZhanyanpPipe } from './pipes/zhanyanp.pipe';
import { ZhanyandDirective } from './directives/zhanyand.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZhaoyancComponent, ZhanyanpPipe, ZhanyandDirective],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,

    ZhaoyancComponent,

    ZhanyandDirective,

    ZhanyanpPipe
  ]
})
export class SharedModule { }
