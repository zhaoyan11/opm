import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zhanyanp'
})
export class ZhanyanpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'zhaoyan-pipe';
  }

}
