import { HttpErrorResponse } from "@angular/common/http";
import { Action, createAction, props } from "@ngrx/store";

import { User } from "../../models/user";
import { UsersState } from "./users.state";

export enum USER_ACTIONS{
    GET_USERS= '[User] Get Users',
    GET_USERS_SUCCESS = '[User] Get Users Sucess',
    GET_ USERS_ERROR = '[User] Get Users Error',

    GET_USER= '[User] Get User',
    GET_USER_SUCCESS = '[User] Get User Sucess',
    GET_ USER_ERROR = '[User] Get User Error',
}

export const getUsers = createAction(USER_ACTIONS.GET_USERS)
export const getUser = createAction(USER_ACTIONS.GET_USER)

export const getUsersSuccess = createAction(USER_ACTIONS.GET_USERS_SUCCESS,
    props<{users:User[]}>()
    )
export const getUserSuccess = createAction(USER_ACTIONS.GET_USER_SUCCESS,
    props<{selectedUser:User}>()
    )

export const getUsersError = createAction(USER_ACTIONS.GET_USERS_ERROR,
    props<{error:HttpErrorResponse}>()
    )
export const getUserError = createAction(USER_ACTIONS.GET_USER_ERROR,
    props<{error:HttpErrorResponse}>()
    )
