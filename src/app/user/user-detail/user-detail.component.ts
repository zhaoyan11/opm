import { Component, OnInit } from '@angular/core';
import {UserHttpService} from '../../shared/services/http/user-http.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userHttp: UserHttpService) { }

  ngOnInit() {

  }

  ok(): void {

  }
}
