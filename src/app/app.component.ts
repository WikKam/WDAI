import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import { slider, /*transformer,*/ fader, /*stepper*/ } from './route-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   // fader,
    slider
  ]
})
export class AppComponent {
  title = 'wdai-project';
  onActivate(event){
  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
