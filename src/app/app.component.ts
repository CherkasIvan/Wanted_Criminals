import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AnimationRoute } from './animations/animation-route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [AnimationRoute],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title: string = 'wanted_criminals';

  constructor(private router: Router, private http: HttpClient) {}

  animationRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationName']
    );
  }
}
