export interface Stock{
    id: string;
    type: string;
    verdict : string;
    public_url : string;
}

interface GetResponse{
    statusCode: 200 | 400 | 500;
    message: string;
    success: true | false;
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


export interface ImageResponse extends GetResponse{
    data: Array<Categories>
}

export interface StockDetails extends Stock{
    categories : Array<Categories>
    user : {uid : string}
    album: {album_name : string}
}
export interface ImageDetailResponse extends GetResponse{
    data: StockDetails
}


export interface ImageDetailState{
    success: true | false;
    message: string;
    stock: StockDetails | null;
    loading: true | false;
}

export interface ImageDetailAction{
    type: string;
    payload: ImageDetailState
}

export interface AlbumResponse extends GetResponse{
    data: Array<Stock>
}