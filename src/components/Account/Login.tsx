import { LoginType, UserState } from "@/types/Account";
import React, { useState } from "react";
import logo from '../../assets/vstock.jpg';
import Image from 'next/image';
import styles from '../../styles/Accounts/Login.module.css';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../../firebase/firebase';
import { useRouter } from 'next/router'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Login : React.FC<LoginType>= function({setUserState, userState}){
    const router = useRouter()
    const [typeState, setTypeState] = useState<{type: 'customer' | 'contributor'}>({
        type: 'customer'
    })
    function handleSignIn(){
        signInWithPopup(auth, provider).then((result) => {
            const obj = {
                email : result.user.email,
                id : result.user.uid,
                type: typeState.type
            }
            console.log(obj);
            fetch('http://localhost:3001/user/login', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type' : "application/json"
                }
            }).then((data) => data.json()).then(
                (data) => {
                    console.log(data);

                    if(data && data.data && data.data.user){
                        router.push('/');
                    }
                    else{
                        setUserState((prevState => {
                            return {
                                email: obj.email,
                                id : obj.id,
                                type: obj.type
                            }
                        }));
                    }
                }
                ).catch((err) => console.log(err))
            

        }).catch((err) => {
            alert(err);
            window.location.reload();
        })
    }

    function handleRole(e : React.ChangeEvent<HTMLInputElement>){
        setUserState((prevState) => {
            return {
                ...prevState,
                type: e.target.value.includes('Customer') ? 'customer' : 'contributor'
            }
        })
        setTypeState({
            type: e.target.value.includes('Customer') ? 'customer' : 'contributor'
        })
    }
    return (
        <div className="login">
            <div className='login-img'>
                <Image src={logo} alt="logo" className="login-logo"/>
            </div>
            <div className="login-type">
                <div>
            <input type={'radio'} name='type' value={'Login as Customer'} id='cust' onChange={handleRole}> 
                </input>
                <label htmlFor="cust">Login as Customer</label></div>
                <div>
                <input type={'radio'} name='type' value={'Login as Contributor'} id='contrib' onChange={handleRole}/>
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