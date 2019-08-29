import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-cloud-apply-detail',
  templateUrl: './cloud-apply-detail.component.html',
  styleUrls: ['./cloud-apply-detail.component.css']
})
export class CloudApplyDetailComponent implements OnInit {
  @Input() value = '';
  constructor(private drawerRef: NzDrawerRef<string>) {}

  close(): void {
    this.drawerRef.close(this.value);
  }

  ngOnInit() {
  }
}
