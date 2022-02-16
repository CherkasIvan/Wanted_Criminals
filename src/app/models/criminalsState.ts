import { Criminals } from './criminals';

export interface criminalsState {
  criminals: Criminals[];
  total: number;
  page: number;
}
