import { Component,ChangeDetectionStrategy } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';

import { AnimationRoute } from './animations/animation-route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [AnimationRoute],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title: string = 'wanted_criminals';
  animationRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationName'];
    }  
}
