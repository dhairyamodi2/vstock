import { load_fail, load_req, load_suc, login_fail, login_suc, logout_suc } from "./user.constants";
import { UserAction, UserState, VisitedAction, VisitedState } from "./user.types";

export const visitReducer = (state : VisitedState = {visited: false}, action: VisitedAction) : VisitedState =>{
    if(action.type == 'visit'){
        return {
            visited: true
        }
    }
    return state
}


export const authReducer = (state : UserState = {isAuthenticated: false, loading: true, user : null}, action: UserAction) : UserState => {
    switch(action.type){
        case login_suc:
            return {
                loading: false,
                isAuthenticated: true,
                user : action.payload
            }
        case login_fail:
            return {
                loading: false,
                isAuthenticated: false,
                user : null
            }
        
        case load_req:
            return {
                loading: true,
                isAuthenticated: false,
                user : null
            }
        case load_suc:
            return {
                loading: false,
                isAuthenticated: true,
                user : action.payload
            }
        case load_fail:
            return {
                loading: false,
                isAuthenticated: false,
                user : null
            }
        case logout_suc:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            } 
        default:
            return state;
    }
}