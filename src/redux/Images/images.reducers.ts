import { images_fail, images_req, images_suc } from "./images.constants";
import { ImageActions, ImagesState } from "./images.types";

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