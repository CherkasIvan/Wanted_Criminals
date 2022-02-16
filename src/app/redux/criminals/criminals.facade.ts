import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCriminalsSuccess, loadCriminals } from './criminals.actions';
import { selectCriminalsData } from './criminals.selectors';
import { CriminalsState } from './criminals.state';

@Injectable({ providedIn: 'root' })
export class CriminalsFacade {
  public criminalsData$ = this.store.select(selectCriminalsData);

  constructor(private store: Store<CriminalsState>) {}

  public loadCriminals(page: number): void {
    this.store.dispatch(loadCriminals({ page }));
  }
}
