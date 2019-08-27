import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { environment } from 'src/environments/environment';
import { EnvHackService } from '../shared/services/env-hack.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent implements OnInit {
  constructor(private envHack: EnvHackService) {}

  public isProd: boolean = environment.production;
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    this.envHack.hack();
  }
}
