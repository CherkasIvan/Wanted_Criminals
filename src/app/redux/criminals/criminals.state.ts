import { Criminals } from '../../models/criminals';

export interface CriminalsState {
  criminals: Criminals[];
  page: number;
  total: number;
}
