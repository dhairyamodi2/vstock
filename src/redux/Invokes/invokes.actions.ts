import { Dispatch } from "redux"
import { logoutAction } from "../User/user.actions"
import { my_invokes_fail, my_invokes_load, my_invokes_suc } from "./invokes.constants"
import { MyInvokesAction, MyInvokesResponse } from "./invokes.types"

export const getMyInvokes = function(){
    return async function(dispatch : Dispatch<MyInvokesAction>){
        try {
            dispatch({
                type: my_invokes_load,
                payload: {success: false,message: "", data: [], loading: true}
            });

            const data = await fetch('http://localhost:3001/downloads/invoked', {
                method: 'GET',
                headers: {
                    'Content-type' : 'application/json',
                    Authorization:"Bearer " + localStorage.getItem('token')
                }
            });
            if(data.status == 401){
                logoutAction();
                return;
            }
            const res = await data.json() as MyInvokesResponse;
            let type = res.success ? my_invokes_suc : my_invokes_fail
            dispatch({
                type: type,
                payload: {success: res.success, message: res.message, data: res.data, loading: false}
            })
        } catch (error) {
            dispatch({
                type: my_invokes_fail,
                payload: {success: false, message: error as string, data: [], loading: false}
            })
        }
    }
}