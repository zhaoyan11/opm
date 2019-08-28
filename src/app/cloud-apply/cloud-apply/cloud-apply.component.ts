import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CloudApplyHttpService } from '../../shared/services/http/cloud-apply-http.service';

@Component({
  selector: 'app-cloud-apply',
  templateUrl: './cloud-apply.component.html',
  styleUrls: ['./cloud-apply.component.css']
})

export class CloudApplyComponent implements OnInit {
  public list: any;
  public loading = false;
  public query: any = {pageNum: 1, pageSize: 10};
  public drawerVisible = false;

  constructor(
    private modal: NzModalService,
    private cloudApplyHttp: CloudApplyHttpService
  ) { }

  ngOnInit() {
    this.getList();
  }

  add(): void {
    this.drawerVisible = true;
  }

  getList(queryParams = this.query): void {
    this.loading = true;
    this.cloudApplyHttp.getList(queryParams).subscribe( res => {
      if (res['code'] === 0) {
        this.list = res || {total: 0, rows: []};
        this.loading = false;
      }
    });
  }

  resetQuery(formData): void {
    formData.resetForm();
    this.getList();
  }

  remove(id): void {

  }

}
