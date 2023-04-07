export interface UserState{
    id: string | null;
    email: string | null;
    type : "customer" | "contributor"
}

export interface LoginType{
    userState : UserState,
    setUserState : React.Dispatch<React.SetStateAction<UserState>>
}
