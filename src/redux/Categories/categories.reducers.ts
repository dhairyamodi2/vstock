import { Action } from "redux";
import { categories_fail, categories_req, categories_suc } from "./categories.constants";
import { CategoryAction, CategoryState } from "./categories.type";

export const categoryReducers = (state : CategoryState | null, action: CategoryAction) : CategoryState => {
    switch(action.type){
        case categories_req:
            return {success: false, loading: true, message: "Loading", categories: []}
        case categories_suc:
            return {
                success: true,
                message: action.payload.message,
                loading: false,
                categories: action.payload.data
            }
        case categories_fail:
            return {
                success: false,
                message: action.payload.message,
                loading: false,
                categories: []
            }
        default:
            return {success: false, message: "Some error", loading: true, categories: []}
    }
}