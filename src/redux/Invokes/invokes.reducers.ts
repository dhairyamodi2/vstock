import { Dispatch } from "redux";
import { my_invokes_fail, my_invokes_load, my_invokes_suc } from "./invokes.constants";
import { MyInvokesAction, MyInvokesState } from "./invokes.types";

export const myInvokesReducer = (state: MyInvokesState = { success: false, loading: true, message: "", data: [] }, action: MyInvokesAction): MyInvokesState => {
    switch (action.type) {
        case my_invokes_load:
            return {
                ...action.payload,
                loading: true
            }
        case my_invokes_suc:
            return {
                ...action.payload,
                loading: false
            }
        case my_invokes_fail:
            return {
                ...action.payload,
                loading: false
            }
        default:
            return state;
    }
}