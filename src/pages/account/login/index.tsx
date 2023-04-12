import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../../../firebase/firebase';
import Login from "@/components/Account/Login";
import CompleteSignUp from "@/components/Account/CompleteSignUp";
import { UserState } from "@/types/Account";
import { Header } from "@/components/Common/Header";

const Page : React.FC = function(){
    const auth = getAuth(app);
    const provider =  new GoogleAuthProvider();
    const [userState, setUserState] = useState<UserState>({
        type: 'customer',
        email: null,
        id: null
    })
    function handleSignIn(){
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.error(err)
        })
    }
    return (
        <div className="login-component">
            <Header />
            {/* <CompleteSignUp email={userState.email} id = {userState.id} type = {userState.type}/> */}
            {userState.email === null || userState.id === null ? <Login userState={userState} setUserState={setUserState}/> : <CompleteSignUp email={userState.email} id = {userState.id} type = {userState.type}/> }
        </div>
    )
}

export default Page;