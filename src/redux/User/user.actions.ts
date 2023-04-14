import { Dispatch } from "redux"
import { load_fail, load_req, load_suc, login_fail, login_suc, logout_suc } from "./user.constants"
import { User, UserAction, VisitedAction } from "./user.types"

export const visitOnce = function(){
    return async function(dispatch : Dispatch<VisitedAction>){
        try {
            dispatch({
                type: 'visit',
                payload: {visited: true}
            }) 
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const loginAction = function(token : string | null, user : User | null){
    return async function(dispatch : Dispatch<UserAction>){
        if(token != null && user != null){
            localStorage.setItem("token", token);
            dispatch({
                type: login_suc,
                payload: user
            })
        }
        else {
            dispatch({
                type: login_fail,
                payload : null
            })
        }
    }
}

export const getMe = function(){
    return async function(dispatch: Dispatch<UserAction>){
        try {
            const cred = localStorage.getItem('token');
            if(cred == null){
                dispatch({
                    type: load_fail,
                    payload: null
                })
                return;
            }
            dispatch({
                type: load_req,
                payload : null
            })

            const data = await fetch('http://localhost:3001/user/me', {
                method: 'GET',
                headers: {
                    'Authorization' : 'Bearer ' + cred
                }
            })
            const res = await data.json();
            if(data.status == 401 || data.status == 403){
                dispatch({
                    type: load_fail,
                    payload: null
                });
                return;
            }

            if(res.success == true && res.data && res.data.user){
                dispatch({
                    type: load_suc,
                    payload : res.data.user
                });
                return;
            }

            dispatch({
                type: load_fail,
                payload: null
            })
        } catch (error) {
            dispatch({
                type: load_fail,
                payload: null
            })
        }
    }
}

export const logoutAction = function(){
    return async function(dispatch : Dispatch<UserAction>){
        try {
            localStorage.removeItem('token');
            dispatch({
                type: logout_suc,
                payload: null
            })
        } catch (error) {
            dispatch({
                type: logout_suc,
                payload: null
            })
        }
    }
}