export interface VisitedState {
    visited: true | false;
}

export interface VisitedAction{
    type : 'visit'
    payload: VisitedState
}

export interface User {
    uid : string;
    name : string;
    email : string;
    user_type : string;
    industry: string;
    bank_ac_number : string;
    IFS_code : string;
}

export interface UserState {
    isAuthenticated : true | false;
    loading: true | false;
    user : User | null;
}


export interface UserAction {
    type : string;
    payload : User | null
}