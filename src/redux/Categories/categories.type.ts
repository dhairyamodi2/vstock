export interface Category{
    category_name : string;
    category_image : string;
    category_verdict : string;
}

export interface CategoryResponse{
    statusCode : 200 | 400 | 500;
    message: string;
    data: Array<Category>;
    success: true | false;
}

export interface CategoryAction{
    type: string;
    payload: CategoryResponse;
}

export interface CategoryState{
    success: true | false;
    loading: true | false;
    message: string;
    categories : Array<Category> | null;
}