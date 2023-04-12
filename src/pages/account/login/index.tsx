import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase/firebase';
import Login from "@/components/Account/Login";
import CompleteSignUp from "@/components/Account/CompleteSignUp";
import { UserState } from "@/types/Account";
import { Header } from "@/components/Common/Header";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/redux/store";
import { VisitedState, UserState as ReduxUserState } from "@/redux/User/user.types";
import { getMe, visitOnce } from "@/redux/User/user.actions";
import { useRouter } from "next/router";
import { useCheckAuth } from "@/hooks/auth";
import { getCategories } from "@/redux/Categories/categories.actions";

const Page: React.FC = function () {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const visitedState = useSelector<State, VisitedState>(state => state.visitedState);
    const authState = useSelector<State, ReduxUserState>(state => state.authState);
    const router = useRouter();
    const dispatch = useDispatch();
    const [pageLoader, setLoader] = useState(true);

    useEffect(() => {
        router.events.on('hashChangeComplete', () => {
            setLoader(false);
        })
        dispatch(getCategories() as any);
    }, [])
    useCheckAuth(visitedState, authState, setLoader);
   
    const [userState, setUserState] = useState<UserState>({
        type: 'customer',
        email: null,
        id: null
    })
    function handleSignIn() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.error(err)
        })
    }
    return (
        <div>
            {pageLoader == true ? <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam, magni, perferendis incidunt ad error hic, cum neque iste dolores cumque laudantium dolor enim molestiae quidem voluptatem non quasi fuga.</div> : <div className="login-component">

                <Header />
                {/* <CompleteSignUp email={userState.email} id = {userState.id} type = {userState.type}/> */}
                {userState.email === null || userState.id === null ? <Login userState={userState} setUserState={setUserState} /> : <CompleteSignUp email={userState.email} id={userState.id} type={userState.type} />}
            </div>}
        </div>

    )
}

export default Page;