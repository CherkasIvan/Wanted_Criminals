import { HttpErrorResponse } from "@angular/common/http";
import { Action, createAction, props } from "@ngrx/store";

import { User } from "../../models/user";
import { UsersState } from "./users.state";

export enum USER_ACTIONS{
    GET_USERS= '[User] Get Users',
    GET_USERS_SUCCESS = '[User] Get Users Sucess',
    GET_USERS_ERROR = '[User] Get Users Error',
}


export const getUsers = createAction(USER_ACTIONS.GET_USERS)
export const getUsersSuccess = createAction(USER_ACTIONS.GET_USERS_SUCCESS,
    props<{users:User[]}>()
    )
export const getUsersError = createAction(USER_ACTIONS.GET_USERS_ERROR,
    props<{error:HttpErrorResponse}>()
    )