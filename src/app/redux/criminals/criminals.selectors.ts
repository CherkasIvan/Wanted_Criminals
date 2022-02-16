import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CriminalsState } from './criminals.state';

const criminalsFeatureSelector =
  createFeatureSelector<CriminalsState>('criminals');


export const selectCriminalsData = createSelector(
  criminalsFeatureSelector,
  (state) => state
);
