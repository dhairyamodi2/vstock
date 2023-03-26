import { UserState } from "@/types/Account";
import React from "react";

interface LoginType{
    userState : UserState,
    setUserState : React.Dispatch<React.SetStateAction<UserState>>
}
const Login : React.FC<LoginType>= function({setUserState, userState}){
    return (
        <div className="div">
            doing great
        </div>
    )
}

export default Login;