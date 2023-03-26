import { LoginType, UserState } from "@/types/Account";
import React from "react";
import logo from '../../assets/vstock.jpg';
import Image from 'next/image';
import styles from '../../styles/Accounts/Login.module.css';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../../firebase/firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Login : React.FC<LoginType>= function({setUserState, userState}){
    function handleSignIn(){
        signInWithPopup(auth, provider).then((result) => {
            setUserState((prevState) => {
                return {
                    type: prevState.type,
                    email: result.user.email,
                    id: result.user.uid
                }
            })
        }).catch((err) => {
            alert(err);
            window.location.reload();
        })
    }
    return (
        <div className="login">
            <div className='login-img'>
                <Image src={logo} alt="logo" className="login-logo"/>
            </div>
            <div className="login-type">
                <div>
            <input type={'radio'} name='type' value={'Login as Customer'} id='cust'>
                </input>
                <label htmlFor="cust">Login as Customer</label></div>
                <div>
                <input type={'radio'} name='type' value={'Login as Contributor'} id='contrib'/>
                <label htmlFor="contrib">Login as Contributor</label></div>
            </div>
            <p className="info-text">Continue to login or create account</p>
            <div className="login-button">
                <button className="button" onClick={handleSignIn}>Continue With Google</button>
            </div>
        </div>
    )
}

export default Login;