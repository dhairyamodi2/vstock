import { LoginType, UserState } from "@/types/Account";
import React, { useState } from "react";
import logo from '../../assets/vstock.jpg';
import Image from 'next/image';
import styles from '../../styles/Accounts/Login.module.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase';
import { useRouter } from 'next/router'
import { Button } from "@chakra-ui/react";
import {FaGoogle} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { loginAction } from "@/redux/User/user.actions";
import { User } from "@/redux/User/user.types";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Login: React.FC<LoginType> = function ({ setUserState, userState }) {
    const router = useRouter();
    const dispatch = useDispatch();
    function handleSignIn() {
        signInWithPopup(auth, provider).then((result) => {
            const obj = {
                email: result.user.email,
                uid: result.user.uid,
                user_type: 'customer'
            }
            console.log(obj);
            fetch('http://localhost:3001/user/login', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': "application/json"
                }
            }).then((data) => data.json()).then(
                (data) => {
                    console.log(data);

                    if (data && data.data && data.data.user) {
                        dispatch(loginAction(data.data.token as string, data.data.user as User) as any);
                        router.push('/');
                    }
                    else if(data.statusCode == 422 || data.statusCode == 400 || data.statusCode == 500){
                        alert(data.message);
                    }
                    else {
                        setUserState((prevState) => {
                            return {
                                ...prevState,
                                email: obj.email,
                                type: obj.user_type,
                                id : obj.uid
                            }
                        })
                    }
                }
            ).catch((err) => console.log(err))


        }).catch((err) => {
            alert(err);
            window.location.reload();
        })
    }
    return (
        <div className="login">
            <Image src={logo} alt="logo" className="login-logo"/>
            <p className="info-text">Continue to login or create account</p>
            <Button
                leftIcon={<FaGoogle />}
                size={'md'}
                margin={1}
                bgColor={'black'}
                color={'white'}
                transform={'0.3s'}
                _hover={{ bgColor: 'black', color: 'white' }} onClick={handleSignIn}>Continue with Google</Button>
        </div>
    )
}

export default Login;