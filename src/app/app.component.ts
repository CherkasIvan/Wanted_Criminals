import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AnimationRoute } from './animations/animation-route';
import { environment } from './models/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [AnimationRoute],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title: string = 'wanted_criminals';

  constructor(
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

  animationRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationName']
    );
  }
}
