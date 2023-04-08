import { Dispatch } from "redux"
import { images_fail, images_req, images_suc } from "./images.constants";
import { ImageActions, ImageResponse, Stock } from "./images.types"

export const getImages = function(categories: Array<string>) {
    return async function (dispatch : Dispatch<ImageActions>) {
        try {
            // params.categories.map((item) => )
            dispatch({
                type: images_req,
                payload: {loading: true, success: false, message: "Loading", stock: []}
            });
            const params = new URLSearchParams();
            categories.map((item) => {
                params.append('categories', item);
            })
            const url = 'http://localhost:3001/stock/filter?' + params.toString();
            console.log(url);
            const data = await fetch(url);
            const res = await data.json() as ImageResponse;
            if(res.success == true && data.status == 200){
                let stock: Array<Stock> = [];
                res.data.map((category) => {
                    stock = stock.concat(category.stock);
                })
                dispatch({
                    type: images_suc,
                    payload: {loading: false, message: res.message, stock, success: true}
                });
                return;
            }
            dispatch({
                type: images_fail,
                payload: {...res, loading: false, stock: []}
            })

            
        } catch (error) {
            if(error instanceof TypeError){
                console.log('given queries not an array')
            }
            console.log(error);
        }
    }
}