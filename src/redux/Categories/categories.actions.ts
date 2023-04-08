import { Dispatch } from "redux"
import { categories_fail, categories_req, categories_suc } from "./categories.constants"
import { CategoryAction, CategoryResponse } from "./categories.type"

export const getCategories = function(){
    return async function(dispatch : Dispatch<CategoryAction>) {

        try {
            dispatch({
                type: categories_req,
                payload: {data: [], success: false, message: "Loading",statusCode: 200}
            })
    
            const data = await fetch("http://localhost:3001/categories/all");
            const res = await data.json() as CategoryResponse;
            console.log(data.status)
            console.log(res);
            if(data.status == 200 && res.success == true){
                dispatch({
                    type: categories_suc,
                    payload: {data: res.data, success: res.success, message: res.message, statusCode: data.status}
                })
                return;
            }
            dispatch({
                type: categories_fail,
                payload: {data: res.data, success: res.success, message: res.message, statusCode: res.statusCode}
            })
        } catch (error) {
            dispatch({
                type: categories_fail,
                payload: {data: [], success: false, message: "Some error in our code we will try to fix that soon", statusCode: 500}
            })
        }
        
    }
}