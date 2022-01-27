import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map((tick) => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }
  constructor() {}
}
