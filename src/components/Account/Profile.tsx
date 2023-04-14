import { State } from "@/redux/store";
import { getMe, logoutAction } from "@/redux/User/user.actions";
import { User, UserState } from "@/redux/User/user.types";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../Common/CustomLoader";

const Profile = function () {
    // useEffect(() => {
    //     alert('profile mounted');
    // }, [])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe() as any);
    }, [])
    const authState = useSelector<State, UserState>(state => state.authState);
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        if (authState.loading == false) {
            if (authState.isAuthenticated == false) {
                router.replace('/account/login');
            }
            else {
                setUser(authState.user);
            }
        }
    }, [authState])

    const handleChange: ChangeEventHandler<HTMLInputElement> = function (e) {
        //@ts-ignore
        setUser((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = async function () {
        try {
            const data = await fetch('http://localhost:3001/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            })
            if (data.status == 401) {
                window.location.reload();
            }
            const res = await data.json();
            if (res.success == true) {
                alert('Profile updated!');
                dispatch(getMe() as any);
            }
            else {
                alert(res.message);
            }
        } catch (error) {
            alert(error);
        }

    }
    return (
        <div className="profile">
            {authState.loading ? <CustomLoader /> : <form className="profile-update">
                <input type={'text'} name={'name'} placeholder={'Name'} autoComplete='off' value={user?.name} onChange={handleChange} />
                <input type={'text'} name={'email'} placeholder={'Email'}    disabled autoComplete='off' value={user?.email} onChange={handleChange} />
                <input type={'text'} name={'industry'} placeholder={'Industry'} autoComplete='off' value={user?.industry} onChange={handleChange} />
                <input type={'text'} name={'bank_ac_number'} placeholder={'Bank Account Number'} autoComplete='off' value={user?.bank_ac_number} onChange={handleChange} />
                <input type={'text'} name={'IFS_code'} placeholder={'IFS Code'} autoComplete='off' value={user?.IFS_code} onChange={handleChange} />
                <Button
                    bgColor={'black'}
                    color={'white'}
                    transition={'0.8s'}
                    marginTop={'25px'}
                    onClick={handleClick}
                    _hover={{ bgColor: 'black', color: 'white', transform: 'scale(1.03)' }}>Update Profile</Button>
            </form>}

        </div>
    )
}

export default Profile;