import { imageDetails_fail, imageDetails_req, imageDetails_suc, images_album_fail, images_album_req, images_album_suc, images_fail, images_req, images_suc, images_user_fail, images_user_req, images_user_suc } from "./images.constants";
import { ImageActions, ImageDetailAction, ImageDetailState, ImagesState } from "./images.types";

export const imageReducers = (state: ImagesState = {
    success: false,
    loading: true,
    message: "Some error",
    stock: []
}, action: ImageActions): ImagesState => {
    switch (action.type) {
        case images_req:
            return {
                ...action.payload,
                loading: true,
                success: false
            }
        case images_suc:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        case images_fail:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        default:
            return state;
    }
}


export const imageDetailsReducer = (state : ImageDetailState = {
    loading: true,
    success: false,
    message: "Default",
    stock: null
}, action : ImageDetailAction) : ImageDetailState => {
    switch(action.type){
        case imageDetails_req:
            return {
                ...action.payload,
                loading: true,
                success: false
            }
        case imageDetails_suc:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        case imageDetails_fail:
            return {
                ...action.payload,
                loading: false,
                success: false
            }
        default:
            return state
    }
}

export const imageAlbumReducer = (state: ImagesState = {
    success: false,
    loading: true,
    message: "Some error",
    stock: []
}, action: ImageActions): ImagesState => {
    switch (action.type) {
        case images_album_req:
            return {
                ...action.payload,
                loading: true,
                success: false
            }
        case images_album_suc:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        case images_album_fail:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        default:
            return state;
    }
}

export const imageUserRedeucer = (state: ImagesState = {
    success: false,
    loading: true,
    message: "Some error",
    stock: []
}, action: ImageActions): ImagesState => {
    switch (action.type) {
        case images_user_req:
            return {
                ...action.payload,
                loading: true,
                success: false
            }
        case images_user_suc:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        case images_user_fail:
            return {
                ...action.payload,
                loading: false,
                success: true
            }
        default:
            return state;
    }
}