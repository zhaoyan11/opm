import { Component, OnInit } from '@angular/core';
import { UserDetailComponent } from '../../user/user-detail/user-detail.component';
import { NzModalService } from 'ng-zorro-antd';
import { CloudApplyHttpService } from '../../shared/services/http/cloud-apply-http.service';

@Component({
  selector: 'app-cloud-apply',
  templateUrl: './cloud-apply.component.html',
  styleUrls: ['./cloud-apply.component.css']
})
export class CloudApplyComponent implements OnInit {
  public listData: any;
  public loading = false;

  constructor(
    private modal: NzModalService,
    private cloudApplyHttp: CloudApplyHttpService
  ) { }

  ngOnInit() {
    this.getList();
  }

  add(): void {
    this.modal.create({
      nzTitle: 'Modal Title',
      nzWidth: '680',
      nzContent: UserDetailComponent,
      nzClosable: false,
      nzMaskClosable: false,
      nzOnOk: instance => instance.ok()
    });
  }

  getList(): void {
    this.loading = true;
    this.cloudApplyHttp.getList().subscribe( res => {
      if (res['code'] === 0) {
        this.listData = res['rows'] || [];
        this.loading = false;
      }
    });
  }

  remove(id): void {

  }

  currentPageDataChange($event: any): void {}
}
