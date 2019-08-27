import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ZhaoyansService } from '../../shared/services/zhaoyans.service';
import { UserHttpService } from '../../shared/services/http/user-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public listData: any;
  public loading = false;
  constructor(
    private zhaoyans: ZhaoyansService,
    private modal: NzModalService,
    private userHttp: UserHttpService
  ) { }

  ngOnInit() {
    console.log(this.zhaoyans.getName());
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

  delete(id: string | number): void {
    this.loading = true;
    // this.userHttp.delete().subscribe( result => {
    //   this.listData = result['data'];
    //   this.loading = false;
    // });
  }

  getList(): void {
    this.loading = true;
    this.userHttp.getList().subscribe( result => {
      this.listData = result['data'];
      this.loading = false;
    });
  }

  currentPageDataChange($event: any): void {}

}
