import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {
  RouterOutlet,
  Router,
  NavigationCancel,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

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
export class AppComponent implements OnInit {
  public title: string = 'wanted_criminals';
  public loading$: Observable<boolean> = of(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    );
  }

  animationRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationName']
    );
  }
}
