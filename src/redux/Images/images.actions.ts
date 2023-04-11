import { Dispatch } from "redux"
import { imageDetails_fail, imageDetails_req, imageDetails_suc, images_album_fail, images_album_req, images_album_suc, images_fail, images_req, images_suc, images_user_fail, images_user_req, images_user_suc } from "./images.constants";
import { AlbumResponse, ImageActions, ImageDetailAction, ImageDetailResponse, ImageResponse, Stock } from "./images.types"

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
            console.log('response');
            console.log(res)
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


export const getImageDetails = function (id : string) {
    return async function(dispatch : Dispatch<ImageDetailAction>){
        try {
            dispatch({
                type: imageDetails_req,
                payload: {success: false, message: "Loading", loading: true, stock: null}
            })
            const data = await fetch('http://localhost:3001/stock/' + id);
            const res = await data.json() as ImageDetailResponse
            console.log(res);
            if(data.status == 200 && res.success == true){
                dispatch({
                    type: imageDetails_suc,
                    payload: {success: true, message: "", loading: false, stock: res.data}
                })
                return;
            }
            dispatch({
                type: imageDetails_fail,
                payload: {success: false, message: res.message, loading: false, stock: null}
            })
        } catch (error) {
            dispatch({
                type: imageDetails_fail,
                payload: {success: false, message: "error", loading: false, stock: null}
            })
        }
    }
}


export const getMoreInfo = function(type: 'album' | 'user' , payload : string, limit: 'three' | 'none'){
    return async function(dispatch : Dispatch<ImageActions>){
        try {
            dispatch({
                type: type == 'album' ? images_album_req : images_user_req,
                payload: {loading: true, success: false, message: "Loading", stock: []}
            });
            const url = 'http://localhost:3001/stock/';
            const path = type == 'album' ? 'album/' : 'user/';
            const data = await fetch(url + path + payload);
            const res = await data.json() as AlbumResponse;
            console.log(type);
            console.log(res);
            if(data.status == 200 && res.success == true){
                let arr : Array<Stock> = []
                if(limit == 'three'){
                    for(let i = 0; i< Math.min(3, res.data.length); i++){
                        arr.push(res.data[i]);
                    }
                }
                else {
                    arr = arr.concat(res.data);
                }
                dispatch({
                    type: type == 'album' ? images_album_suc : images_user_suc,
                    payload: {loading: false, success : true, message: "", stock: arr}
                })
                return;
            }
            dispatch({
                type: type == 'album' ? images_album_fail : images_user_fail,
                payload: {loading: false, success: false, message: res.message, stock: []}
            })
        } catch (error) {
            dispatch({
                type: type == 'album' ? images_album_fail : images_user_fail,
                payload: {success: false, message: "error", loading: false, stock: []}
            })
        }
    }
}