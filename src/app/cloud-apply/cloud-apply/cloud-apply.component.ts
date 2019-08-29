import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { CloudApplyHttpService } from '../../shared/services/http/cloud-apply-http.service';
import { CloudApplyDetailComponent } from '../cloud-apply-detail/cloud-apply-detail.component';

@Component({
  selector: 'app-cloud-apply',
  templateUrl: './cloud-apply.component.html',
  styleUrls: ['./cloud-apply.component.css']
})

export class CloudApplyComponent implements OnInit {
  public list: any;
  public loading = false;
  public query: any = {pageNum: 1, pageSize: 10};

  constructor(
    private modal: NzModalService,
    private cloudApplyHttp: CloudApplyHttpService,
    private drawer: NzDrawerService
  ) { }

  ngOnInit() {
    this.getList();
  }

  add(): void {
    const drawerRef = this.drawer.create<CloudApplyDetailComponent, { value: string }, string>({
      nzTitle: '申请登录云桌面',
      nzContent: CloudApplyDetailComponent,
      nzContentParams: {
        value: '呵呵'
      },
      nzBodyStyle: { height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' },
      nzWidth: 800
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  getList(queryParams = this.query): void {
    this.loading = true;
    this.cloudApplyHttp.getList(queryParams)
      .subscribe( res => {
      // if (res['code'] === 0) {
        this.list = res || {total: 0, rows: []};
        this.loading = false;
      // }
    }, error => {
        this.list = {total: 0, rows: []};
        this.loading = false;
      });
  }


  resetQuery(formData): void {
    formData.resetForm();
    this.getList();
  }

  remove(id): void {

  }

}
