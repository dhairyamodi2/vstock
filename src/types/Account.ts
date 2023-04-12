export interface UserState{
    id: string | null;
    email: string | null;
    type : string;
}

export interface LoginType{
    userState : UserState,
    setUserState : React.Dispatch<React.SetStateAction<UserState>>
}
