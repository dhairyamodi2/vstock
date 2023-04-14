export interface InvokesData {
    id : string;
    private_url : string;
}
export interface MyInvokesResponse {
    success : boolean;
    statusCode : 200 | 400 | 500;
    message: string;
    data : Array<InvokesData>
}


export interface MyInvokesState {
    loading : boolean;
    message: string;
    success: boolean;
    data : Array<InvokesData>
}


export interface MyInvokesAction {
    type : string;
    payload : MyInvokesState
}