export interface Stock{
    id: string;
    type: string;
    verdict : string;
    public_url : string;
}
interface Categories{
    category_name : string;
    category_verdict : string;
    category_image: string;
    stock: Array<Stock>
}

export interface ImagesState{
    success: true | false;
    message: string;
    stock: Array<Stock>
    loading: true | false
}

export interface ImageActions {
    type: string;
    payload : ImagesState
}


export interface ImageResponse{
    statusCode : 200 | 400 | 500;
    message: string;
    success: true | false;
    data: Array<Categories>
}