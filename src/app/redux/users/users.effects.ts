import { Injectable } from '@angular/core';
import { pipe, ofType, switchMap, map, catchError } from 'rxjs';
import { USER_ACTIONS } from './users.actions';
import { usersReducer } from './users.reducers';

@Injectable()
export class userseffects {

  
  getUsers$ = createEffect(() => this.actions$ pipe(
      ofType(usersReducer.getUsers),
      switchMap(()=>this.DataServise)
  ));

  constructor(private actions$:Actios)
}

